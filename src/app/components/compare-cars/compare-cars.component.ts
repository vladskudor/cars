import { Component, OnInit , ElementRef , Renderer2 , DoCheck , OnDestroy} from '@angular/core';
import {ServiceService} from '../service/service.service';


@Component({
  selector: 'app-compare-cars',
  templateUrl: './compare-cars.component.html',
  styleUrls: ['./compare-cars.component.scss']
})
export class CompareCarsComponent implements OnInit , DoCheck , OnDestroy{
  public car1: any;
  public car2: any;

  public carMotor1: any;
  public carAcceleration1: any;
  public carHorsePower1: any;

  public carMotor2: any;
  public carAcceleration2: any;
  public carHorsePower2: any;
  constructor(public svc: ServiceService , public element: ElementRef , public renderer: Renderer2) { }

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

  ngDoCheck(): void{

  }

  ngOnDestroy(): void{
    localStorage.removeItem('car1');
    localStorage.removeItem('car2');
  }

}
