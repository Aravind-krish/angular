import { Component, OnInit } from '@angular/core';
import {CommonService} from '../../common.service'
import { FormGroup, FormBuilder, Validators, FormGroupDirective } from '@angular/forms';
import {OrderPersonService} from '../../order-person.service'
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
@Component({
  selector: 'app-order-conformation',
  templateUrl: './order-conformation.component.html',
  styleUrls: ['./order-conformation.component.scss']
})
export class OrderConformationComponent implements OnInit {
  DeliveryPersonliveUpdate: any;
  status:any;
  Statusresult: void;
  delivered: any;
  constructor(fb: FormBuilder, private service:OrderPersonService,private common:CommonService,public dialog :MatDialog,private route:Router) {
    this.DeliveryPersonliveUpdate = fb.group({
      EC_DEL_MAN_ID:[],
      EC_TRACKING_ID:[],
      EC_HEADER_ID:[],
      EC_ORDER_STATUS:"Delivered",
      CREATED_BY:[],
      CREATED_DATE:[],
      LAST_UPDATE_LOGIN:[],
      HEADERID:[]
    })
   }
 
 
  ngOnInit(): void {
    this.common.Headerid.subscribe(res=>{
    if(res){
    this.service.ViewDeliveryPersonTobepickdata(res).subscribe(res1=>{
      this.delivered = res1;
      if(this.delivered){
      this.DeliveryPersonliveUpdate.patchValue({
        EC_DEL_MAN_ID: this.delivered[0]['EC_DEL_MAN_ID'],
        EC_TRACKING_ID:this.delivered[0]['EC_TRACKING_ID'],
        EC_HEADER_ID:this.delivered[0]['EC_HEADER_ID'],
        CREATED_BY:this.delivered[0]['CREATED_BY'],
        CREATED_DATE:this.delivered[0]['CREATED_DATE'],
        LAST_UPDATE_LOGIN:this.delivered[0]['LAST_UPDATE_LOGIN'],
        HEADERID:this.delivered[0]['TXN_HEADER_ID']
      })
    }
      
    })
  }
    
    })
    
  }
  StatusUpdate(){
    
    this.service.PostDeliveryPersonTobepick(this.DeliveryPersonliveUpdate.value).subscribe(res=>{
      
    })
    this.route.navigateByUrl('/Confirmed')
      this.dialog.closeAll()
  
  }
  cancel(){
 
    
    this.dialog.closeAll()
  }
}
