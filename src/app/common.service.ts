import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }
  public Headerid = new BehaviorSubject<any>(null);
  public userid = new BehaviorSubject<any>(null);
  public deliverypersonOrderdetails = new BehaviorSubject<any>(null);
  public Statusdisplay = new BehaviorSubject<any>(null);
  public StatusScreen = new BehaviorSubject<any>(null);
  public verification = new BehaviorSubject<any>(null);
  public loginUserName = new BehaviorSubject<any>(null);
}
