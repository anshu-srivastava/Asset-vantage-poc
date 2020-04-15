import { Component, OnInit} from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-image',
  templateUrl: './image-eg.component.html',
  styleUrls: ['./image-eg.component.scss']
})
export class ImageEgComponent implements OnInit {
  temArray = [];
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
    },
    {
      id: 8,
      url: '../../../assets/boris-smokrovic-HWwF4OnXAdM-unsplash.jpg'
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
  imageUrl: any;

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
      cols: 2,
      id: UUID.UUID(),
      rows: 4,
      x: 0,
      y: 0
    });
  }

  removeItem(id: string) {
    this.temArray = this.dashboard;
    const item = this.dashboard.find(d => d.id === id);
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

}
