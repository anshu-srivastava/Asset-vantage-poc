import { Injectable } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';
import { UUID } from 'angular2-uuid';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  public options: GridsterConfig = {
    gridType: GridType.Fit,
    compactType: CompactType.None,
    pushItems: true,
    draggable: {
      enabled: true
    },
    resizable: {
      enabled: true
    }
  };
  public layout: GridsterItem[] = [];

  constructor() { }

  addItem(): void {
    this.layout.push({
      cols: 5,
      id: UUID.UUID(),
      rows: 5,
      x: 0,
      y: 0
    });
  }
  deleteItem(id: string): void {
    const item = this.layout.find(d => d.id === id);
    this.layout.splice(this.layout.indexOf(item), 1);
  }
}

