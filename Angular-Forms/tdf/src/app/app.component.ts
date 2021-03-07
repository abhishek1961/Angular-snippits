import { Component } from '@angular/core';
import{EnrollmentService} from './enrollment.service';
import {User} from './user';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'tdf';
  public topics=["Angular","React","Vue","php"];
  userModel=new User(null,null,null,null,null,null,null,null);
  public getname:string='ABHI';

  //userModel=new User("","","","",8588970377,"Vue","morning",true);
  
  constructor(private eserv:EnrollmentService){}

  style:{}={'font-weight':'bold',

          'font-size':'13px',
          //color:'pink'
        }

  style2:{}={'border': '2px solid white',
              'padding': '25px',
              'border-radius':'50px'}

        click(userform)
        {
          console.log(userform);
        }


        onsubmit(){
          this.eserv.enroll(this.userModel)
          .subscribe(data=>console.log("success!!",data),error=>console.log("error!!",error));
        }

        getprocess(){
          console.log("getting..."+this.getname);
          this.eserv.getdata(this.getname)
          .subscribe(data=>console.log("success!!",data),error=>console.log("error!!",error));
        }
}
