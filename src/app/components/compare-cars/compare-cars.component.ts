import {Component, OnInit, ElementRef, Renderer2, DoCheck, OnDestroy} from '@angular/core';
import {ServiceService} from '../service/service.service';


@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.scss']
})
export class CompareCarsComponent implements OnInit, DoCheck, OnDestroy {
  public car1: any;
  public carMotor1: any;
  public carAcceleration1: any;
  public carHorsePower1: any;

  public car2: any;
  public carMotor2: any;
  public carAcceleration2: any;
  public carHorsePower2: any;

  public img1: any;
  public img2: any;
  public activeImg1: boolean = false;
  public activeImg2: boolean = false;

  constructor(public svc: ServiceService,
              public element: ElementRef,
              public renderer: Renderer2) {}

  ngOnInit(): void {
    const car1 = localStorage.getItem('car1');
    const car2 = localStorage.getItem('car2');
    this.svc.overflowHidden();
    if (car1 && car2) {
      this.car1 = JSON.parse(car1);
      this.car2 = JSON.parse(car2);
    }

    this.car1.forEach((car) => {
      this.carMotor1 = car.motor;
      this.carAcceleration1 = car.acceleration;
      this.carHorsePower1 = car.horsePower;
    });

    this.car2.forEach((car) => {
      this.carMotor2 = car.motor;
      this.carAcceleration2 = car.acceleration;
      this.carHorsePower2 = car.horsePower;
    });
  }

  openImg1(img1): void {
    this.img1 = img1;
    this.img1.style.position = 'absolute';
    this.img1.style.top = '25%';
    this.img1.style.display = 'flex';
    this.img1.style.width = '30%';

    this.activeImg1 = true;
  }

  closeImg1(): void {
    this.img1.style.position = 'statik';
    this.img1.style.top = 'none';
    this.img1.style.display = 'inline';
    this.img1.style.justifyContent = 'center';
    this.img1.style.width = '100px';

    this.activeImg1 = false;
  }


  openImg2(img2): void {
    this.img2 = img2;
    this.img2.style.position = 'absolute';
    this.img2.style.top = '25%';
    this.img2.style.display = 'flex';
    this.img2.style.width = '30%';

    this.activeImg2 = true;
  }

  closeImg2(): void {
    this.img2.style.position = 'statik';
    this.img2.style.top = 'none';
    this.img2.style.display = 'inline';
    this.img2.style.justifyContent = 'center';
    this.img2.style.width = '100px';

    this.activeImg2 = false;
  }

  ngDoCheck(): void {

  }

  ngOnDestroy(): void {
    localStorage.removeItem('car1');
    localStorage.removeItem('car2');
  }
}
