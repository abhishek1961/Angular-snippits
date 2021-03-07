import { Component } from '@angular/core';
import{SmsserveService} from './smsserve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Voice Call APP';

  constructor(private eserv:SmsserveService){}

  style:{}={'border': '2px solid blue',
              margin:'50px',
              'padding': '25px',

              'border-radius':'50px'}
  obj:{}={
    phone:null,
    message:""
  }

  onsubmit()
  {
    console.log(this.obj);
    
    this.eserv.send(this.obj)
    .subscribe(data=>alert(data.message),error=>console.log("error!!",error));
    //alert(data.message);
  }

}
