import { Directive, ElementRef, HostListener, Renderer } from '@angular/core';

@Directive({ selector: '[dir-highlight]' })
export class HighlightDirective {

  constructor(private el: ElementRef, private renderer: Renderer) {
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.renderer.setElementStyle(this.el.nativeElement, 'backgroundColor', color);
  }
}
