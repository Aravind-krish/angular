import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-confirmed',
  templateUrl: './confirmed.component.html',
  styleUrls: ['./confirmed.component.scss']
})
export class ConfirmedComponent implements OnInit {
homeComponent:any;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.homeComponent = setTimeout(()=>{
      this.router.navigateByUrl('/HomePage');
    }, 5000);
  }
  Homescreen(){
    clearTimeout(this.homeComponent)
    this.router.navigateByUrl('/HomePage');
  }
}
