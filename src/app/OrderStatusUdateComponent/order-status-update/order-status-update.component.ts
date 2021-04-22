import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import {OrderConformationComponent} from '../../OrderConformation/order-conformation/order-conformation.component'
import {OrderPersonService} from '../../order-person.service'
import {CommonService} from '../../common.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-order-status-update',
  templateUrl: './order-status-update.component.html',
  styleUrls: ['./order-status-update.component.scss'],
  providers: [DatePipe],
  
})
export class OrderStatusUpdateComponent implements OnInit {
  dateformat: any;
  time: any;
  data: any;
  ViewDetails: any;
  imgpath: any;
  Address: any;
  State: any;
  headerid: any;
  userid: any;
  deliverypersonid: any;
  orderstatus: any;

  constructor(private dialog:MatDialog,private datePipe: DatePipe,private service:OrderPersonService,private common:CommonService,private routes: ActivatedRoute) { }

  ngOnInit(): void {
   
    this.dateformat = this.datePipe.transform(new Date(), ' d LLL y h:mm a');
    
    this.common.deliverypersonOrderdetails.subscribe(res=>{
    this.service.ViewDeliveryPersonLiveUpdate(res).subscribe(res1=>{
      if(res1){
        this.data = res1;
        this.ViewDetails = this.data[0];
        this.imgpath = this.data[0]['IMAGE_PATH']
            this.Address = this.data[0]['ECS_ADDRESS'] + "," + this.data[0]['ECS_LOCALITY'] + ","+this.data[0]['ECS_CITY'] + ","+ this.data[0]['ECS_STATE'] + "," +this.data[0]['ECS_COUNTRY'];
            this.common.Headerid.next(this.data[0]['EC_ORDER_HDR_ID'])
      }
    })
    })
   
  }
  ConformOrder(){
    
    this.common.Headerid.next(this.data[0]['EC_ORDER_HDR_ID'])
this.dialog.open(OrderConformationComponent,{width:"250px", height:"175px"})
  }
 
}
