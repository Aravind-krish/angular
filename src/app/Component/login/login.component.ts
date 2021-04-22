import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  LoginGroup:any
  ApplicationNmame:any
  return: any;
  Forgetpass:any;
  dp: any;
  screen: any;
  constructor(private service:CommonService) {
   }
 
  ngOnInit(): void {
    this.service.verification.subscribe(res=>{
      this.screen= res
    })
  }

 
}
