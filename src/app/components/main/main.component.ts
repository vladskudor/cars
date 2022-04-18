import {Component, OnInit} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {LogoServiceService} from '../service/logo-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public logotype: any;
  public hint = false;
  public car1: any;
  public car2: any;

  public searchCarName: any;
  public searchCarModel: any;

  constructor(public svc: ServiceService, public svcLogo: LogoServiceService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    const users = localStorage.getItem('users');
    if (!user && !users) {
      document.location.reload();
    }

    setTimeout(() => {
      if (!this.svc.showCars) {
        this.hint = true;
      }
    }, 5000);

    const car1 = localStorage.getItem('car1');
    const car2 = localStorage.getItem('car2');
    if (car1) {
      this.car1 = JSON.parse(car1);
      console.log(this.car1.name);
    }
    if (car2) {
      this.car2 = JSON.parse(car2);
    }

    if (car1 && car2) {
      this.router.navigate(['/compare-cars']);
    }
  }
}
