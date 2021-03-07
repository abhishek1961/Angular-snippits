import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template: `<ul *ngFor=" let employee of employees;index as i">
  <li>{{i+1}}{{employee.name}} {{employee.age}}</li>
  </ul>`,
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public employees=[];

  //public employees=[{id:1,name:"abhishek",age:22},{id:2,name:"raju",age:20},{id:3,name:"jeetu",age:24},];
  constructor(public emp:EmployeeService) { }

  ngOnInit() {
    this.employees=this.emp.getemployees();

  }

}
