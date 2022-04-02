import {Component, OnInit, DoCheck, OnDestroy, TemplateRef , Input} from '@angular/core';
import {ServiceService} from '../service/service.service';
import {LogoServiceService} from '../service/logo-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit , DoCheck , OnDestroy {
  public logotype: any;
  public allLikeCar: boolean = false;
  public currentImage: any;

  // currency: number = 210;
  @Input() public template?: TemplateRef<{ $implicit: any }>;

  constructor(public svc: ServiceService, public svcLogo: LogoServiceService, public router: Router) {
  }

  ngOnInit(): void {

  }

  ngDoCheck(): void{
    if (this.allLikeCar) {
      this.svc.overflowAuto();
    }
    if (!this.allLikeCar) {
      this.svc.overflowHidden();
    }
  }

  ngOnDestroy(): void {
    this.allLikeCar = false;
    this.svc.overflowHidden();
  }

  public deleteCarLike(likeCar): void {
    for (let delCar = 0; delCar < this.svc.user.likeCars.length; delCar++) {
      if (likeCar.value === this.svc.user.likeCars[delCar].value) {
        this.svc.user.likeCars.splice(delCar, 1);
        localStorage.setItem('user', JSON.stringify(this.svc.user));
      }
    }
  }

  public carNameImg(): void {
    for (const i of this.svc.user.likeCars) {
      for (const img of this.svcLogo.logotypes) {
        if (i.mark === img.name) {
          this.logotype = img.image.source;
          i.logo = this.logotype;
        }
      }
    }
  }
}

