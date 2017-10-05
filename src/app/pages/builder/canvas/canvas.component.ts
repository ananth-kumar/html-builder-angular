import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem } from 'angular-gridster2';
import { AppComponent } from '../../../app.component';



@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  options: GridsterConfig;
  dashboard: Array<GridsterItem>;
  box1Integer: number = 3;
  box2Integer: number = 10;

  box1Items: string[] = [];
  box2Items: string[] = [];
  constructor() { }


  ngOnInit() {
    this.options = {
      draggable: { enabled: true },
      resizable: { enabled: true },
      gridType: 'fixed',
      fixedColWidth: 150,
      fixedRowHeight: 50,
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize,
    };

    this.dashboard = [
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 2, y: 0, x: 2 }
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item) {
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem() {
    this.dashboard.push({});
  }

  allowDropFunction(baseInteger: number): any {
    return (dragData: any) => dragData % baseInteger === 0;
  }

  addTobox1Items($event: any) {
    console.log($event);
  }

  onDrop($event: any) {
    this.box2Items.push($event.dragData);
    console.log($event);
  }

}
