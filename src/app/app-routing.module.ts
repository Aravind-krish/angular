import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderStatusUpdateComponent } from '../app/OrderStatusUdateComponent/order-status-update/order-status-update.component';
import { AssigntodeliverComponent } from './Component/assigntodeliver/assigntodeliver.component';
import { DeliveredComponent } from './Component/delivered/delivered.component';
import { DeliveryPersonHomeComponent } from './Component/delivery-person-home/delivery-person-home.component';
import { LoginComponent } from './Component/login/login.component';
import { ToBePickComponent } from './Component/to-be-pick/to-be-pick.component';
import { ConfirmedComponent } from './confirmed/confirmed.component';

const routes: Routes = [
  {path:'Login',component:LoginComponent},
  {path:"OderStatusUpdate",component:OrderStatusUpdateComponent},
  
  {path:'Confirmed',component:ConfirmedComponent},
  {path:'HomePage',component:DeliveryPersonHomeComponent},
  {path:'assigntopick',component:AssigntodeliverComponent},
  {path:'delivered',component:DeliveredComponent},
  {path:'TobePick',component:ToBePickComponent},
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: '**', redirectTo: 'Login', pathMatch: 'full' },
  
  
];
export const mainRoutingProviders: any[] = [];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
