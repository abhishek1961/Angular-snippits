import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DepartmentListComponent } from './department-list/department-list.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { OverviewComponent} from './overview/overview.component';

const routes: Routes = [{path:'',component:DepartmentListComponent},
  {path:'departments',component:DepartmentListComponent},
  {path: 'employees',component: EmployeeListComponent},
  {path:'departments/:id',component:DepartmentDetailComponent,
   children:[{path:'overview',component:OverviewComponent}]
},
  {path:'**',component:PageNotFoundComponent}
];

  export const routingcomponent=[DepartmentListComponent,EmployeeListComponent,PageNotFoundComponent,DepartmentDetailComponent,OverviewComponent];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
