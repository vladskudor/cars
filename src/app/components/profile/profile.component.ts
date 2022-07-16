import {Component, OnInit, DoCheck, OnDestroy} from '@angular/core';
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
  public headerContent: string = 'liked the cars';

  constructor(public svc: ServiceService,
              public svcLogo: LogoServiceService,
              public router: Router) {}

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

