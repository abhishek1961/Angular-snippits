import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { AppComponent } from './app.component';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {
 public nam:string="ok hai boss";
  url='http://localhost:3000/enroll';
  url2='';
  constructor(private http:HttpClient) { }

  enroll(user:User){
   return this.http.post<any>(this.url,user);
  }
  
  getdata(name:string){
    this.nam=name;
   this.url2='http://localhost:3000/name/'+this.nam;
    return this.http.get<any>(this.url2);
  }
}
