import { Directive, OnInit, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input('color') textColor: string;

  private element: HTMLElement;
  private colors: Array<string> = ['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 
                                   'lime', 'maroon', 'navy', 'olive', 'orange', 'purple', 
                                   'silver', 'teal', 'red', 'yellow'];

  constructor(element: ElementRef) {
     this.element = element.nativeElement;
  }

  ngOnInit() {
    this.getTextColor(this.textColor);
  }
 
  @HostListener('click') onClick() {
    this.getTextColor(this.colors[Math.floor(Math.random() * this.colors.length)]);
  }

  private getTextColor(color: string): void {
    this.element.style.color = color;
  }
}
