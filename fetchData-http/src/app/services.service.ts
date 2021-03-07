import {  Observable, observable } from 'rxjs';
import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Iemployee} from './emp';
/*import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
 */

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
 public url:string="assets/employeesdata.json";
 public obj:{}={"id":7,"name":"anirudh","age":26};
  constructor(private http:HttpClient) { }

  getdata():Observable<Iemployee[]>{return this.http.get<Iemployee[]>(this.url)/*.catch(this.errorHandler)*/}
  
  /*errorHandler(error:HttpErrorResponse){
    return observable.throw(error.message || "server error");
  }*/
  getdata2(){return ['abhishek','gaur'];}
}
