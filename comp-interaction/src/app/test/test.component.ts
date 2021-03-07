import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
  <div ><h2>{{"hello "+name}}</h2></div>
  <button (click)="onfire()">click</button>
  <h2 >{{person | json}}</h2>
  <h2 >{{person}}</h2>
  `,
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') public name;
  @Output() public childEvent=new EventEmitter();
  public person={firstname:"abhishek",
  lastname:"gaur"}

  onfire()
  {
    this.childEvent.emit('hey gaur');
    //console.log(this.childEvent.emit('hey hey gaur!'));

   
  }
  constructor() { }

  ngOnInit() {
  }

}
