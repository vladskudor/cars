import { Directive , ElementRef } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {
  public settings: any;

  constructor(public element: ElementRef) {
    this.settings = JSON.parse(localStorage.getItem('settings'));
    console.log(this.settings.backgroundImage);
    this.element.nativeElement.style.background = `url(${this.settings.backgroundImage})`;
    this.element.nativeElement.style.backgroundRepeat = 'no-repeat';
    this.element.nativeElement.style.backgroundAttachment = 'fixed';
    this.element.nativeElement.style.backgroundSize = 'auto 50%';
    this.element.nativeElement.style.backgroundPositionX = 'center';
    this.element.nativeElement.style.backgroundPositionY = 'center';
  }

}
