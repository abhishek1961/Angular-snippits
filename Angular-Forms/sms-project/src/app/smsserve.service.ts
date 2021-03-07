import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SmsserveService {
url:string='http://localhost:5000/sms'
  constructor(private http:HttpClient) {


  }

  send(obj:object)
  {
   return  this.http.post<any>(this.url,obj);
  }
}
