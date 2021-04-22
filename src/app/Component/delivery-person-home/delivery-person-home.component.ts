import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CommonService} from '../../common.service';
import {OrderPersonService} from '../../order-person.service'
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-delivery-person-home',
  templateUrl: './delivery-person-home.component.html',
  styleUrls: ['./delivery-person-home.component.scss']
})
export class DeliveryPersonHomeComponent implements OnInit {
  count:any;
  order:any;
  id: any;
  Date = new Date();
  dateformat: any;
  UserName: any;
  constructor(private route:Router,private common:CommonService,private service:OrderPersonService,private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.count=0;
    this.common.StatusScreen.next(null);
    this.id= localStorage.getItem('Id')
    this.UserName = localStorage.getItem('UserName')
    this.dateformat = this.datePipe.transform(new Date(), ' d LLL y h:mm a');
    this.service.ViewStatusCount(this.id).subscribe(res=>{
      this.order = res
      this.count = this.order[0]
      
    })
  }
  assigntodelivery(){
    this.common.StatusScreen.next(1);
    this.route.navigateByUrl('/assigntopick')
  }
  delivered(){
     this.common.StatusScreen.next(2);
    this.route.navigateByUrl('/assigntopick')
  }
  tobepick(){
    this.common.StatusScreen.next(3);
    this.route.navigateByUrl('/assigntopick')
  }
}
