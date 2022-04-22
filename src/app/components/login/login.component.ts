import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  passwordVisibility: boolean = false;

  user: any;
  constructor(public svc: ServiceService , private router: Router , private http: HttpClient) { }

  ngOnInit(): void {
    this.svc.enterData();
    this.svc.getUser();
    if (this.svc.user){
      this.router.navigate(['/main' , this.svc.user.email , this.svc.user.password]);
    }
    this.http.get('https://api.github.com/search/users').subscribe(data => console.log(data));
  }
}
