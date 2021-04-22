import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/LoginService/login-service.service';
import { CommonService } from 'src/app/common.service';
@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  LoginGroup:FormGroup;
  ApplicationNmame:any
  return: any;
  Forgetpass:any;
  dp: any;
  sendotpMail: any;
  DPLogin: any;
  constructor(private fd:FormBuilder,private Lservice:LoginServiceService,private route:Router,private snackBar:MatSnackBar,private service:CommonService) {
    this.LoginGroup = fd.group({
      UserName:[],
      OTP:[]
    })
   }

  ngOnInit(): void {
  this.sendotpMail = null
  }
  Sendotp(){
    
    this.Lservice.GetOTP(this.LoginGroup.value['UserName']).subscribe(res=>{
      if(res){
        this.sendotpMail = "send"
        this.snackBar.open('Otp send to Your Mail', 'Okey', {
          duration: 2000,
          verticalPosition: 'top'
        });
        
      }
     
    },error => {
      this.snackBar.open('Error', 'Please Enter valid Mail Id', {
        duration: 2000,
        verticalPosition: 'top'
      });
    })
  }
  keyPress(event: any) {
    
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  onSearchChange(event: any) {
    if(event.length == 6){
      this.Lservice.GetOtpLogin(this.LoginGroup.value['UserName'],this.LoginGroup.value['OTP']).subscribe(res=>{
        
        this.DPLogin = res
        if(this.DPLogin[0]['RESPONSE'] == "TRUE"){
          this.service.loginUserName.next(this.LoginGroup.value['UserName']);
          this.service.verification.next(2);
        }
      },error => {
        this.snackBar.open('Error', 'Please Enter Valid OTP', {
          duration: 2000,
          verticalPosition: 'top'
        });
      })
      
    }
   
    
    
  }
   
}
