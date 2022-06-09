import { Component, OnInit , DoCheck} from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit , DoCheck{
  public image: any;
  public number = 0;
  public imagesCars: any = [
    {
      path: 'assets/images/1.png',
      description: 'first you have to choose the first car'
    },
    {
      path: 'assets/images/2.png',
      description: 'and choose a second car'
    },
    {
      path: 'assets/images/3.png',
      description: 'now you need to specify the engine capacity, acceleration to 100 per second and horsepower'
    },
    {
      path: 'assets/images/4.png',
      description: 'you can now view the characteristics of both cars and click the test button to test them'
    },
    {
      path: 'assets/images/5.png',
      description: 'to start the game press start and quickly press enter to drive the first car and space bar to drive the second car'
    },
    {
      path: 'assets/images/6.png',
      description: 'then you can view the results on the main page'
    },
    {
      path: 'assets/images/7.png',
      description: 'you can also view your profile'
    },
    {
      path: 'assets/images/8.png',
      description: 'in the profile you can still see the cars you like'
    },
    {
      path: 'assets/images/9.png',
      description: 'you can edit your profile on the edit page'
    }
  ];
  constructor(public svc: ServiceService) {
    this.image = this.imagesCars[0];
  }

  ngOnInit(): void {

  }


  ngDoCheck(): void{
    if (this.imagesCars.length > 3) {
      this.svc.overflowAuto();
    }
  }

  imgPlus(): void{
    if (this.number === this.imagesCars.length - 1) {
      this.number = 0;
      this.image = this.imagesCars[0];
    }
    this.number++;
    this.image = this.imagesCars[this.number];
  }

  imgMinus(): void{
    if (this.number === 0) {
      this.number = this.imagesCars.length;
    }
    this.number--;
    this.image = this.imagesCars[this.number];
  }
}
