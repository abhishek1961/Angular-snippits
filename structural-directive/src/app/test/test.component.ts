import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <h2 *ngIf="varr">sahi hai</h2>
  <h3 *ngIf="varr;then thenblock;else elseblock"></h3>
  <ng-template #thenblock>abhishek</ng-template>
  <ng-template #elseblock>hidden</ng-template>

  <div [ngSwitch]="color">
  <h1 *ngSwitchCase="r">red</h1>
  <h1 *ngSwitchCase="'green'">green</h1>
  <h1 *ngSwitchCase="'blue'">blue</h1>
  <h1 *ngSwitchDefault>not present in list</h1>
  </div>


  <div *ngFor="let color of colors;index as i ">{{i}}{{color}}</div>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public varr=true;
  public color="red";
  public r="red";
  public colors=["red","green","blue","black"];
  constructor() { }

  ngOnInit() {
  }

}
