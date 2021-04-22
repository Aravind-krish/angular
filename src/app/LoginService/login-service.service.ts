import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  // API_URL: string = 'http://localhost:49848/';
  API_URL: string = 'http://clientserverinternalapi.snowbirdinfotech.com/';
  constructor(private client: HttpClient) { }
  GetUserToken(Email:any, Password:any,ApplicationName:any) {
    var data = "UserName=" + Email + "&Password=" + Password + "&Application"+ ApplicationName + "&grant_type=password" ;
    var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    return this.client.post(this.API_URL + '/token', data, { headers: reqHeader });
  }

  GetUserDetails() {
    return this.client.get(this.API_URL + `/api/User/DeliveryMenAuthenticate`
      , { headers: new HttpHeaders({ 'Authorization': 'Bearer ' + localStorage.getItem('User_Token') }) });
  }
  GetOTP(Email:any){
    return this.client.get(this.API_URL+`api/User/SentOTP?mEmail=${Email}`)
  }
  GetOtpLogin(Email:any,OTP:any){
    return this.client.get(this.API_URL+`api/User/ValidateUserOTP?mEmail=${Email}&mOTP=${OTP}`)
  }
  GetNewPasswor(Email:any,Password:any){
    return this.client.get(this.API_URL+`api/User/UserPassword?mEmail=${Email}&mPassword=${Password}`);
  }

  
}
