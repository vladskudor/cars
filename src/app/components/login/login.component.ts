import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: any;
  constructor(public svc: ServiceService , private router: Router) { }

  ngOnInit(): void {
    this.svc.enterData();
    this.svc.getUser();
    if (this.svc.user){
      this.router.navigate(['/main' , this.svc.user.email , this.svc.user.password]);
    }
  }
}
