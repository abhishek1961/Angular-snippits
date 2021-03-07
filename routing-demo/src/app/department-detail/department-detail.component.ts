import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router, convertToParamMap, ParamMap} from '@angular/router';
@Component({
  selector: 'app-department-detail',
  template: `
    <p>
      you entered in department with id:{{id}}
      <br><button (click)=goToOverview()>Overview</button>
      <router-outlet></router-outlet> 
      <br><a (click)="previous()"  style="color:green;margin-left:30px;">Previous</a>
      <br><a (click)="next()"  style="color:green;margin-left:30px;">next</a>
      <br><button (click)="goToDepartments()">Back</button>
    </p>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {
  public name:string;
  public id:number;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
    //this.id=parseInt(this.route.snapshot.paramMap.get('id'));
    this.route.paramMap.subscribe((param : ParamMap)=>
          this.id=parseInt(param.get('id')));
  }

  previous(){
    this.router.navigate(['/departments',this.id-1]);
  }


  next(){
    this.router.navigate(['/departments',this.id+1]);
  }


  goToDepartments(){
    //this.router.navigate(['/departments',{id:this.id}]);  //absolute navigation
    this.router.navigate(['../',{id: this.id}],{relativeTo:this.route});  //relative navigation("../ this is for just go back one segment of url")
  }

  goToOverview()
  {
    this.router.navigate(['overview'],{relativeTo:this.route});
  }
}
