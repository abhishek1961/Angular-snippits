import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<div>welcome {{name}}</div>
  <h1 [style.color]="haserror?'green':'blue'">style binding</h1>
  <input type="text" [id]="myid" [class]="success">
  <input type="text" [class.danger]="haserror">

  <h3 [ngClass]="cla">header hai be</h3>
  <button (click)="onclick()" >greet</button>
  <h4>{{message}}<h4>

  <input #myinput type="text">
  <button (click)="logmessage(myinput.value)">log</button>
  

  <input [(ngModel)]="name" type="text">
  {{name}}

  
  `,
  styles: [`div{color:green;
  }
  #idd{color:yellow;}
  .successclass{border: 10px solid pink; }
  .danger{background-color:red;
          width:20%;
          height:100%;
  }
  `]
})
export class TestComponent implements OnInit {
  public name="Abhishek Gaur";
  public myid="idd";
  public success="successclass";
  public haserror=true;
  public message="";
  public cla={
    "successclass":true,
    "danger":true,
    name:"abhishek"

  }
  onclick()
  {this.message="welcome user"+this.cla.name;

}
  constructor() { }

  ngOnInit() {
  }

  logmessage(value){
    this.message=value;
  }

}
