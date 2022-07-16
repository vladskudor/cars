import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ServiceService} from '../service/service.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public colors: any = [
    {colorBackground: '#000' , colorText: 'white' , backgroundImage: 'src/assets/images/renaultblack2.jpg'},
    {colorBackground: '#cdcdcd' , colorText: 'black' , backgroundImage: 'src/assets/images/renaultblack1.jpg'}
  ];
  public theme: any;
  constructor(public svc: ServiceService ,
              private router: Router) { }

  ngOnInit(): void {

  }

  public changeTheme(color): void{
    this.colors.forEach((colorTheme) => {
      if (colorTheme === color) {
        document.body.style.background = color.colorBackground;
        document.body.style.color = color.colorText;
        this.theme = colorTheme;
      }
    });
    localStorage.setItem('settings' , JSON.stringify(this.theme));
  }
}
