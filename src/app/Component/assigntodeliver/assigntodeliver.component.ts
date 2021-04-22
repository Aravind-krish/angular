import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {OrderPersonService} from '../../order-person.service'
import {OrderDisplayComponent} from '../order-display/order-display.component'
import {CommonService} from '../../common.service'
@Component({
  selector: 'app-assigntodeliver',
  templateUrl: './assigntodeliver.component.html',
  styleUrls: ['./assigntodeliver.component.scss']
})
export class AssigntodeliverComponent implements OnInit {
  status: any;

  constructor(private route:Router,private service:OrderPersonService,private common:CommonService) { }

  ngOnInit() {
   this.common.StatusScreen.subscribe(res=>{
     if(res == 1){
       
       this.status = 1;
     }
     else if(res == 3){
       
      this.status = 3;
       
     }
     else if(res==2){
       
      this.status = 2;
     }
   })
  }
  Homepage(){
this.route.navigateByUrl('/HomePage')
  }
}
