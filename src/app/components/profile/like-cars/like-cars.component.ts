import {Component, Input, OnInit, TemplateRef} from '@angular/core';
import {ServiceService} from '../../service/service.service';

@Component({
  selector: 'app-like-cars',
  templateUrl: './like-cars.component.html',
  styleUrls: ['./like-cars.component.scss']
})
export class LikeCarsComponent implements OnInit {
  @Input() public template?: TemplateRef<{ $implicit: any }>;
  public content: string;
  @Input() set setContentHeader(content: string) {
    this.content = content;
  }

  constructor(public svc: ServiceService) { }

  ngOnInit(): void {
  }

  public deleteCarLike(likeCar): void {
    for (let delCar = 0; delCar < this.svc.user.likeCars.length; delCar++) {
      if (likeCar.value === this.svc.user.likeCars[delCar].value) {
        this.svc.user.likeCars.splice(delCar, 1);
        localStorage.setItem('user', JSON.stringify(this.svc.user));
      }
    }
  }
}
