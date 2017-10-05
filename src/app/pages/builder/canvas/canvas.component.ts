import { Component, OnInit, ViewContainerRef, ElementRef } from "@angular/core";
import { GridsterConfig, GridsterItem } from "angular-gridster2";
import { AppComponent } from "../../../app.component";
import { TextboxComponent } from "../../../lib/tools/textbox/textbox.component";

const DEFAULT_ROWS = 5;
const DEFAULT_ROW_SIZE = 2;
const DEFAULT_COLUMN_SIZE = 2;
const DEFAULT_COLUMNS = 4;

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.css"]
})
export class CanvasComponent implements OnInit {
  options: GridsterConfig;
  public viewContainerRef: ViewContainerRef;
  dashboard: Array<GridsterItem> = [];
  box1Integer: number = 3;
  box2Integer: number = 10;
  itemTpl: GridsterItem = {};
  box1Items: string[] = [];
  box2Items: string[] = [];

  el: ElementRef;
  constructor() {}

  ngOnInit() {
    this.options = {
      draggable: { enabled: true, ignoreContent: true },
      resizable: { enabled: true },
      pushItems: true,
      gridType: "verticalFixed",
      fixedRowHeight: 60,
      fixedColWidth: 60,
      itemChangeCallback: AppComponent.itemChange,
      itemResizeCallback: AppComponent.itemResize
    };

    this.generateGrid(DEFAULT_ROWS, DEFAULT_COLUMNS);
  }

  generateGrid(row: number, col: number) {
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        let tpl = this.itemTpl;
        tpl.rows = DEFAULT_ROW_SIZE;
        tpl.cols = DEFAULT_COLUMN_SIZE;
        this.dashboard.push(tpl);
      }
    }
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
    // this.box2Items.push($event.dragData);
    // $event.mouseEvent.path[0].insertAdjacentHTML(
    //   "beforeend",
    //   $event."dnd")
    // );
    console.log($event);
  }
  onDragStart($event: any) {
    let elementDrag = this.el.nativeElement;
    $event.dataTransfer.setData("dragData", elementDrag);
  }
}
