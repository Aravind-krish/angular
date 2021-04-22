import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CommonService } from 'src/app/common.service';
import { LoginServiceService } from 'src/app/LoginService/login-service.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  LoginGroup:FormGroup
  ApplicationNmame:any
  return: any;
  Forgetpass:any;
  dp: any;
  hide = true;
  constructor(private service:CommonService,private fd:FormBuilder,private snackBar:MatSnackBar,private Logins:LoginServiceService,private route:Router ) {
    this.LoginGroup = fd.group({
      UserName:[],
      Password:[]
    })
   }

  ngOnInit(): void {
  
  }
  verfication(){
this.service.verification.next(1)
  }
   
  login(event:any){
    this.Logins.GetUserToken(this.LoginGroup.value['UserName'],this.LoginGroup.value['Password'],this.ApplicationNmame).subscribe(res=>{
      this.return = res;
      localStorage.setItem('User_Token',this.return.access_token)
     
      this.Logins.GetUserDetails().subscribe(res=>{
        this.dp = res
        localStorage.setItem('Id', this.dp.Id)
        localStorage.setItem('UserName', this.dp.UserName)
        
        
        if(this.dp){
          this.route.navigateByUrl('/HomePage')
        }
        
      })
    }, error => {
      this.snackBar.open('Error', 'Please Enter valid data', {
        duration: 2000,
        verticalPosition: 'top'
      });
    })
   
    
  }
 
}
