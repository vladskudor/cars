import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-megane',
  templateUrl: './megane.component.html',
  styleUrls: ['./megane.component.scss']
})
export class MeganeComponent implements OnInit {

  constructor(public svc: ServiceService , public router: Router) { }

  ngOnInit(): void {
    this.svc.overflowAuto();
  }

}
