import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class OrderPersonService {
  // API_URL: string = 'http://localhost:49848/';
  API_URL: string = 'http://clientserverinternalapi.snowbirdinfotech.com/';

  constructor(private client: HttpClient) { }
  //ViewDeliveyPersonLiveUpdate
  ViewDeliveryPersonLiveUpdate(Headerid:number){
  return this.client.get(this.API_URL + `api/DeliveryPersonOrderLiveUpdate/Viewdetailsdata?ID=${Headerid}`);
  }
  UpdateDeliveryPersonLiveUpdate(statusupdate:any){
    
    return this.client.post(this.API_URL+ `api/DeliveryPersonOrderLiveUpdate/UpdatedetailsStatus`,statusupdate);
    }
  ViewDeliveryPersonAssigntodeliver(deliverypersonid:number){
    return this.client.get(this.API_URL+`api/DeliveryPersonAssigntodeliver/ViewOrderdetails?ID=${deliverypersonid}`)
  }
  ViewDeliveryPersonItem(Headerid:number){
    return this.client.get(this.API_URL+`api/DeliveryPersonAssigntodeliver/ViewOrderItem?ID=${Headerid}`)
  }
  ViewDeliveryPersonDelivered(deliverypersonid:number){
    return this.client.get(this.API_URL+`api/DeliveryPersonAssigntodeliver/ViewDelivered?ID=${deliverypersonid}`)
  }
  ViewDeliveryPersonTobepick(deliverypersonid:number){
    return this.client.get(this.API_URL+`api/DeliveryPersonAssigntodeliver/ViewTobepick?ID=${deliverypersonid}`)
  }
  ViewDeliveryPersonTobepickdata(headerid:number){
    return this.client.get(this.API_URL+`api/DeliveryPersonAssigntodeliver/ViewTobePickdata?ID=${headerid}`);
  }
  PostDeliveryPersonTobepick(deliverypersonstatusupdate:any){
    return this.client.post(this.API_URL+`api/DeliveryPersonAssigntodeliver/Assignedfordelivery`,deliverypersonstatusupdate)
  }
  ViewStatusCount(deliverypersonid:number){
    return this.client.get(this.API_URL+`api/DeliveryPersonOrderLiveUpdate/ViewStatuscount?ID=${deliverypersonid}`)
  }
}
