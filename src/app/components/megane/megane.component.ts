import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../service/service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-megane',
  templateUrl: './megane.component.html',
  styleUrls: ['./megane.component.scss']
})
export class MeganeComponent implements OnInit {

  public currentImage: false;
  public arrayImagesCars: any = [
    './assets/megane-image3.jpg' , './assets/megane-image4.jpg' , './assets/megane-image5.jpeg' , './assets/megane-image6.jpg'
  ];
  public arrayOptionsCars: any = [
    {
      image: './assets/salon-image1.jpg',
      nameOption: 'easy link',
      text: 'EASY LINK system with replication function support'
    },
    {
      image: './assets/salon-image2.jpg',
      nameOption: 'multi-sense',
      text: 'The MULTI-SENSE system will allow you to adjust driving according to your wishes.'
    },
    {
      image: './assets/salon-image3.jpg',
      nameOption: 'opening',
      text: 'Luggage compartment, and the lid will open by itself.'
    }
  ];
  public currentOption: false;
  public nameOption: false;
  public currentOptionTextDescription: false;

  constructor(public svc: ServiceService , public router: Router) { }

  ngOnInit(): void {
    this.svc.overflowAuto();
  }

  public enterImage(image): void{
    this.currentImage = image;
  }
  public enterOption(option): void{
    this.currentOption = option.image;
    this.nameOption = option.nameOption;
    this.currentOptionTextDescription = option.text;
  }
}
