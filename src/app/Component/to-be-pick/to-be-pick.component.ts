import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {OrderPersonService} from '../../order-person.service';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-to-be-pick',
  templateUrl: './to-be-pick.component.html',
  styleUrls: ['./to-be-pick.component.scss']
})
export class ToBePickComponent implements OnInit {

  id:any
  assignorder: any;
  Splitline: any;
  Lineimage2:any[] = []; 
  Itemdetails: any;
  panelOpenState = false;
  step: any;
  ToBePick:any;
  pickdata: any;
  
  constructor(private service:OrderPersonService,private fd:FormBuilder,private snackbar:MatSnackBar) { 
    this.ToBePick = fd.group({
      EC_DEL_MAN_ID:[],
      EC_TRACKING_ID:[],
      EC_HEADER_ID:[],
      EC_ORDER_STATUS:"Out for delivery",
      CREATED_BY:[],
      CREATED_DATE:[],
      LAST_UPDATE_LOGIN:[],
      HEADERID:[]
    })
  }
  ngOnInit(): void {
    
    this.id= localStorage.getItem('Id')
   this.service.ViewDeliveryPersonTobepick(this.id).subscribe(res=>{
     if(res){
      this.assignorder = res
     } 
   })
  
  }
  Assignoutfordeliver(event:number,Orderno:any){
    if(event){
    this.service.ViewDeliveryPersonTobepickdata(event).subscribe(res=>{
    this.pickdata = res
    if(this.pickdata){
      this.ToBePick.patchValue({
        EC_DEL_MAN_ID: this.pickdata[0]['EC_DEL_MAN_ID'],
        EC_TRACKING_ID:this.pickdata[0]['EC_TRACKING_ID'],
        EC_HEADER_ID:this.pickdata[0]['EC_HEADER_ID'],
        CREATED_BY:this.pickdata[0]['CREATED_BY'],
        CREATED_DATE:this.pickdata[0]['CREATED_DATE'],
        LAST_UPDATE_LOGIN:this.pickdata[0]['LAST_UPDATE_LOGIN'],
        HEADERID:this.pickdata[0]['TXN_HEADER_ID']
      })
    }
    this.service.PostDeliveryPersonTobepick(this.ToBePick.value).subscribe(res=>{
      this.service.ViewDeliveryPersonTobepick(this.id).subscribe(res=>{
        if(res){
         this.assignorder = res
         this.snackbar.open(Orderno,'Assigned to Deliver', {
          duration: 2000,
          verticalPosition: 'top'
        });
        } 
      })
    })
    
    
    })
    
  }
}
  


}
