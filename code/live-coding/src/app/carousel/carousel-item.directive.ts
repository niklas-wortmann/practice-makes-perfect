import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appCarouselItem]'
})
export class CarouselItemDirective implements OnInit {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {}

  public setTransition(time: number) {
    this.setStyle('transition', `all ${time}ms ease-in-out 0s`);
  }

  public setStyle(key: string, value: string) {
    this.renderer.setStyle(this.el.nativeElement, key, value);
  }
}
