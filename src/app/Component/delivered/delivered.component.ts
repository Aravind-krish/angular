import { Component, OnInit } from '@angular/core';
import {OrderPersonService} from '../../order-person.service'
@Component({
  selector: 'app-delivered',
  templateUrl: './delivered.component.html',
  styleUrls: ['./delivered.component.scss']
})
export class DeliveredComponent implements OnInit {

  id:any
  assignorder: any;
 
  Splitline: any;
  Lineimage2:any[] = []; 
  Itemdetails: any;

  constructor(private service:OrderPersonService) { }
  
  ngOnInit(): void {
    this.id=localStorage.getItem('Id')
    
   this.service.ViewDeliveryPersonDelivered(this.id).subscribe(res=>{
     if(res){
      this.assignorder = res
     }
   
   })
  
  }
  

}
