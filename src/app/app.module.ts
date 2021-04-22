import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderStatusUpdateComponent } from '../app/OrderStatusUdateComponent/order-status-update/order-status-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {OrderConformationComponent} from './OrderConformation/order-conformation/order-conformation.component'
import { DatePipe } from '@angular/common';
import {AngularMaterialModules} from './Modules/AngularMaterialModule';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { LoginComponent } from './Component/login/login.component';
import { DeliveryPersonHomeComponent } from './Component/delivery-person-home/delivery-person-home.component';
import { AssigntodeliverComponent } from './Component/assigntodeliver/assigntodeliver.component';
import { OrderDisplayComponent } from './Component/order-display/order-display.component';
import { DeliveredComponent } from './Component/delivered/delivered.component';
import { ToBePickComponent } from './Component/to-be-pick/to-be-pick.component';
import { VerificationComponent } from './Component/verification/verification.component';
import { AuthenticationComponent } from './Component/authentication/authentication.component';
import { AuthenticationConformationComponent } from './Component/authentication-conformation/authentication-conformation.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderStatusUpdateComponent,
    OrderConformationComponent,
    ConfirmedComponent,
    LoginComponent,
    DeliveryPersonHomeComponent,
    AssigntodeliverComponent,
    OrderDisplayComponent,
    DeliveredComponent,
    ToBePickComponent,
    VerificationComponent,
    AuthenticationComponent,
    AuthenticationConformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularMaterialModules,

  ],entryComponents:[OrderConformationComponent],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
