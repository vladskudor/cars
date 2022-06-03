import {Component , OnInit , OnDestroy} from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit , OnDestroy{
  public media: any = window.matchMedia('(max-width:625px)');
  public text: any = ['c', 'a', 'r', 's'];
  public val: any = 0;
  public title = '';
  public valueContent: any;
  constructor(public svc: ServiceService, private router: Router) {
  }

  ngOnInit(): void {
    setInterval(() => {
      this.valueContent = this.text[this.val] + ' ';
      if (this.val === this.text.length){
        this.title = '';
        this.val = 0;
        this.valueContent = this.text[this.val];
      }
      this.val++;
      this.title = this.title + this.valueContent + ' ';
    } , 300);
  }

  ngOnDestroy(): void{

  }


}
