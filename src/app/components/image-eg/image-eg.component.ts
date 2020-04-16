import { Component, OnInit} from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';
import * as html2pdf from 'html2pdf.js';


@Component({
  selector: 'app-image',
  templateUrl: './image-eg.component.html',
  styleUrls: ['./image-eg.component.scss']
})
export class ImageEgComponent implements OnInit {
  temArray = [];
  imageUrl: any;

  imageList = [
    {
      id: 1,
      url: '../../../assets/boris-smokrovic-HWwF4OnXAdM-unsplash.jpg'
    },
    {
      id: 2,
      url: '../../../assets/bruce-jastrow-l1H0sF8-v0k-unsplash.jpg'
    },
    {
      id: 3,
      url: '../../../assets/chanan-greenblatt-bUu9bVUosqE-unsplash.jpg'
    },
    {
      id: 4,
      url: '../../../assets/dattatreya-patra-RoghbRtRG28-unsplash.jpg'
    },
    {
      id: 5,
      url: '../../../assets/dfkt-nkynQWagL-s-unsplash.jpg'
    },
    {
      id: 6,
      url: '../../../assets/dominik-lange-BFsm5vldl2I-unsplash.jpg'
    },
    {
      id: 7,
      url: '../../../assets/ray-hennessy-mpw37yXc_WQ-unsplash.jpg'
    }
  ];

  public options: GridsterConfig = {
    draggable: {
      enabled: true
    },
    pushItems: true,
    resizable: {
      enabled: true
    }
  };

  public dashboard: GridsterItem[] = [];

  /* public dashboard: GridsterItem[] = [
    {cols: 2, rows: 1, y: 0, x: 0},
    {cols: 2, rows: 2, y: 0, x: 2}
  ]; */

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < this.imageList.length; i++ ) {
      this.addItem();
    }
  }

  addItem() {
    this.dashboard.push({
      cols: 0,
      id: UUID.UUID(),
      rows: 0,
      x: 0,
      y: 0
    });
  }

  removeItem(id: string) {
    this.temArray = this.imageList;
    const item = this.temArray.find(d => d.id === id);
    this.temArray.splice(this.temArray.indexOf(item), 1);
  }

  exportDashboard() {
    // instantiate jsPDF
    const element = document.getElementById('dashboard');
    const opt = {
      margin:       1,
      filename:     'dashbosrd.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().set(opt).from(element).save();

    // Old monolithic-style usage:
    html2pdf(element, opt);
  }

}
