import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { LayoutService } from 'src/app/services/layout.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
  }

  get options(): GridsterConfig {
    return this.layoutService.options;
  }

  get layout(): GridsterItem[] {
    return this.layoutService.layout;
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

}
