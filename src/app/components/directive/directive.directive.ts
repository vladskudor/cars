import { Directive , ElementRef} from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(public element: ElementRef) {
    this.element.nativeElement.min = 1;
  }

}
