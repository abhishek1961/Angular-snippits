import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, convertToParamMap, ParamMap} from '@angular/router';  //routing service
@Component({
  selector: 'app-department-list',
  template: `
    <p>
      department-list works!
    </p>
    
    <h1 (click)="onselect(department)"  [class.selected]="isSelected(department)" *ngFor="let department of departments">
    {{department.id}} {{department.name}}</h1>
   
  `,
  styles: ["h1:hover{color:red}",".selected{color :blue}"
  
]
})
export class DepartmentListComponent implements OnInit {
  public  selectedId;
  public departments=[
    {id:1,name:"Angular"},{id:2,name:"Mysql"},{id:3,name:"php"}
  ];
  constructor(private route:ActivatedRoute,private router:Router) { }

  
  ngOnInit() {

    this.route.paramMap.subscribe((param : ParamMap)=>
          this. selectedId=parseInt(param.get('id')));
  }


  onselect(department)
  {
    //this.router.navigate(['/departments',department.id]);
    this.router.navigate([department.id],{relativeTo:this.route});
    
  }

  isSelected(department)
  {
    if(this.selectedId==department.id)
    {return true;}
    else{return false;}
  }

}
