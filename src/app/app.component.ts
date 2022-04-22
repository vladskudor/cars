import {Component, OnInit , DoCheck} from '@angular/core';
import {ServiceService} from './components/service/service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit , DoCheck{
  theme: any;
  public settings: any;
  constructor(public svc: ServiceService , private http: HttpClient) {

  }
  ngOnInit(): void{
    this.svc.getIp();
    this.svc.getUser();
    console.log(this.svc.user);
    this.svc.getUsers();
    this.svc.getAuto();
    const settings = JSON.parse(localStorage.getItem('settings'));
    if (settings) {
      this.settings = settings;
      document.body.style.background = this.settings.colorBackground;
      document.body.style.color = this.settings.colorText;
    }
  }

  ngDoCheck(): void{
    if (this.svc.showCars){
      this.svc.overflowAuto();
    }
    if (!this.svc.showCars){
      this.svc.overflowHidden();
    }
  }
}
