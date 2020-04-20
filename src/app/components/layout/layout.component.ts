import { Component, OnInit, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { GridsterConfig, GridsterItem, GridsterItemComponent, GridType, CompactType, GridsterPush, Draggable, GridsterItemComponentInterface, GridsterComponent, DisplayGrid } from 'angular-gridster2';
import { LayoutService } from 'src/app/services/layout.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

interface Safe extends GridsterConfig {
  draggable: Draggable;
}
@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {
  options: Safe;
  dashboard: Array<GridsterItem>;
  itemToPush: GridsterItemComponent;

  chartOptions = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor(private layoutService: LayoutService) { }
  static eventStart(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    // tslint:disable-next-line: no-console
    console.info('eventStart', item, itemComponent, event);
  }

  static eventStop(item: GridsterItem, itemComponent: GridsterItemComponentInterface, event: MouseEvent) {
    // tslint:disable-next-line: no-console
    console.info('eventStop', item, itemComponent, event);
  }

  static overlapEvent(source: GridsterItem, target: GridsterItem, grid: GridsterComponent) {
    console.log('overlap', source, target, grid);
  }

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      swap: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: false,
        dragHandleClass: 'drag-handler',
        stop: LayoutComponent.eventStop,
        start: LayoutComponent.eventStart,
        dropOverItems: false,
        dropOverItemsCallback: LayoutComponent.overlapEvent,
      },
      resizable: {
        enabled: true
      }
    };

    this.dashboard = [
      {cols: 4, rows: 4, y: 0, x: 0, dragEnabled: true, resizeEnabled: true, hasContent: true},
      {cols: 2, rows: 2, y: 0, x: 2},
      {cols: 1, rows: 1, y: 0, x: 4},
      {cols: 3, rows: 2, y: 1, x: 4},
      {cols: 1, rows: 1, y: 4, x: 5},
      {cols: 1, rows: 1, y: 2, x: 1},
      {cols: 2, rows: 2, y: 3, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2'},
      {cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2'},
      {cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled'},
      {cols: 1, rows: 1, y: 2, x: 4, dragEnabled: false, resizeEnabled: false, label: 'Drag&Resize Disabled'},
      {cols: 1, rows: 1, y: 0, x: 6}
    ];
  }

  changedOptions() {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event, item) {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({x: 0, y: 0, cols: 1, rows: 1});
  }

  exportDashboard() {
    // instantiate jsPDF
    {
      const data = document.getElementById('dashboard-layout');
      html2canvas(data).then(canvas => {
        // Few necessary setting options
        const imgWidth = 208;
        const pageHeight = 295;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const heightLeft = imgHeight;

        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jspdf('p', 'mm', 'a4'); // A4 size page of PDF
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);
        pdf.save('MYPdf.pdf'); // Generated PDF
      });
    }
  }

  onChartClick(event) {
    console.log(event);
  }

}
