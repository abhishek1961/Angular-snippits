import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-employees-detail',
  template: `<h2>Employee Detail</h2>
  <h3>{{errorMsg}}</h3>    
  <div *ngFor="let employee of employees">
    <h4>{{employee.id}}. {{employee.name}} - {{employee.age}}</h4>
  </div>`,
  styleUrls: ['./employees-detail.component.css']
})
export class EmployeesDetailComponent implements OnInit {
 public employees=[];
 public employees2=[];
 public errorMsg;
  constructor(private emp:ServicesService) { }

  ngOnInit() {
    this.emp.getdata().subscribe(data => this.employees = data/*,
    error => this.errorMsg = error*/);
    this.employees2=this.emp.getdata2();
    console.log(this.employees2);
  }

}
