import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-current-car',
  templateUrl: './current-car.component.html',
  styleUrls: ['./current-car.component.scss']
})
export class CurrentCarComponent implements OnInit{
  constructor(public svc: ServiceService) { }

  ngOnInit(): void {
    this.svc.enterDataMotor();
    this.svc.overflowHidden();
  }
}
