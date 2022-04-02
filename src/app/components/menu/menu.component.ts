import {Component , OnInit , OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit , OnDestroy{
  constructor(public svc: ServiceService, private router: Router) {
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void{

  }


}
