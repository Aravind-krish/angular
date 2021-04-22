import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { LoginServiceService } from 'src/app/LoginService/login-service.service';
@Component({
  selector: 'app-authentication-conformation',
  templateUrl: './authentication-conformation.component.html',
  styleUrls: ['./authentication-conformation.component.scss']
})
export class AuthenticationConformationComponent implements OnInit {
  LoginGroup:FormGroup;
  hide = true;
  constructor(private service:CommonService,private fd:FormBuilder,private snackBar:MatSnackBar,private Logins:LoginServiceService) {
    this.LoginGroup = fd.group({
      UserName:[],
      CPassword:[],
      NewPassword:[]
    })
   }

  ngOnInit(): void {
    this.service.loginUserName.subscribe(res=>{
      if(res){
        this.LoginGroup.patchValue({
          UserName:res
        })
      }
    })
  }
  UpdatePass(){
    if(this.LoginGroup.value['CPassword'] == this.LoginGroup.value['NewPassword']){
     this.Logins.GetNewPasswor(this.LoginGroup.value['UserName'],this.LoginGroup.value['CPassword']).subscribe(res=>{
       if(res){
        this.snackBar.open('Password has been updated','Okey', {
          duration: 2000,
          verticalPosition: 'top'
        });
         this.service.verification.next(null)
       }
     })
    }
    else{
      this.snackBar.open('Password not match','Okey', {
        duration: 2000,
        verticalPosition: 'top'
      });
    }
  }

}
