import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeesDetailComponent } from './employees-detail/employees-detail.component';
import {HttpClientModule} from '@angular/common/http'
import { ServicesService } from './services.service'

@NgModule({
  declarations: [
    AppComponent,
    EmployeesDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
