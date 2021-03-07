import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  getemployees()
  {
    return [{id:1,name:"Abhi",age:23},
      {id:2,name:"Rahul",age:24},
      {"id":3,"name":"Abdul","age":22},
      {"id":4,"name":"Raju","age":19}

    ];
  }
}
