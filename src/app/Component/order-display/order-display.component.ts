import { Component, OnInit, ViewChild } from '@angular/core';
import {OrderPersonService} from '../../order-person.service'
import {MatAccordion} from '@angular/material/expansion';
import {CommonService} from '../../common.service'
import {ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
export class Limage {
sno:any
}
@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class OrderDisplayComponent implements OnInit {
  id:any
  assignorder: any;
  LineImage: Array<Limage> = [];
  Splitline: any;
  Lineimage2:any[] = []; 
  Itemdetails: any;
  panelOpenState = false;
  step: any;
 
  
  constructor(private service:OrderPersonService,private common:CommonService,private route:Router) { }
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  ngOnInit(): void {
    
    this.id=localStorage.getItem('Id')
   this.service.ViewDeliveryPersonAssigntodeliver(this.id).subscribe(res=>{
     if(res){
      this.assignorder = res
      this.Itemscaller(this.assignorder[0].EC_ORDER_HDR_ID)
     }
    
    
     for(let i=0 ; i <= this.assignorder.length;){
      
      this.Lineimage2.push(i);
      i=i+1;
     }
     
     
   })
  
  }
  
  Itemscaller(event:number){
    this.service.ViewDeliveryPersonItem(event).subscribe(res=>{
      this.Itemdetails = res
      
    })
  }
  DeliveriPersongComplete(event:number){
    this.common.deliverypersonOrderdetails.next(event);
    this.route.navigateByUrl('/OderStatusUpdate')
  }
 


}
