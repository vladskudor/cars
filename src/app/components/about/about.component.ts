import { Component, OnInit , DoCheck} from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit , DoCheck{
  public media: any = window.matchMedia('(max-width:625px)');
  public menu: boolean = true;
  public imagesCars: any = [
    'assets/images/1.png',
    'assets/images/2.png',
    'assets/images/3.png',
    'assets/images/4.png',
    'assets/images/5.png',
    'assets/images/6.png',
    'assets/images/7.png',
    'assets/images/8.png',
    'assets/images/9.png'
  ];
  constructor(public svc: ServiceService) {

  }

  ngOnInit(): void {
    if (!this.media.matches) {
      this.menu = true;
    }
    if (this.media.matches) {
      this.menu = false;
    }
  }

  ngDoCheck(): void{
    if (this.imagesCars.length > 3) {
      this.svc.overflowAuto();
    }
  }
}
