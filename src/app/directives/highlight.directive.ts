import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private backgroundColor = 'white';

  @HostListener('mouseenter') onmouseover() {
    this.backgroundColor = 'azure';
  }

  @HostListener('mouseleave') mouseleave() {
    this.backgroundColor = 'white';
  }

  @HostBinding('style.backgroundColor') get setColor() {
    return this.backgroundColor;
  }

  constructor() { }

}
