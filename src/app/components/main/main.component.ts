import {Component, OnInit , DoCheck} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {LogoServiceService} from '../service/logo-service.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit , DoCheck{
  public dataCarsName: any;
  public value: any;
  public logotype: any;
  public hint = false;
  public car1: any;
  public car2: any;

  public searchCarName: any;
  public searchCarModel: any;

  public records: any;

  public scrollValue: boolean = false;
  constructor(public svc: ServiceService, public svcLogo: LogoServiceService, private http: HttpClient, private router: Router) {
  }

  ngOnInit(): void {
    const user = localStorage.getItem('user');
    const users = localStorage.getItem('users');
    this.records = JSON.parse(localStorage.getItem('records'));

    console.log(this.records);
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
    }
    if (car2) {
      this.car2 = JSON.parse(car2);
    }

    if (car1 && car2) {
      this.router.navigate(['/compare-cars']);
    }

    setTimeout(() => {
      this.svc.message = true;
    } , 5000);
  }

  ngDoCheck(): void{
    if (this.records) {
      this.svc.overflowAuto();
    }

    if (window.scrollY) {
      this.scrollValue = true;
    }

    if (window.scrollY === 0) {
      this.scrollValue = false;
    }
  }

  enter(value): void{
    this.value = value;
    // this.value.style.textTransform = 'uppercase';
  }

  scrollUp(): void{
    window.scrollTo(0 , 0);
  }
}
