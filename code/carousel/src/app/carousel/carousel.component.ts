import { fromEvent, Subject } from 'rxjs';
import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList, OnInit, Output, OnDestroy } from '@angular/core';
import { map, scan, takeLast, takeUntil, tap, switchMap } from 'rxjs/operators';

import { CarouselItemDirective } from './carousel-item.directive';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(CarouselItemDirective) carouselItems: QueryList<CarouselItemDirective>;

  private readonly DELTA_DIRECTION_COEFFICIENT = -1;
  private readonly MOVE_THRESHOLD_IN_PERCENT = 15;
  private moveThreshold = 0;
  public active = 1;

  private destroyed$ = new Subject<void>();

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.moveThreshold = (this.el.nativeElement.firstChild.clientWidth * this.MOVE_THRESHOLD_IN_PERCENT) / 100;
    console.log(this.moveThreshold);
  }

  public ngAfterContentInit(): void {
    const nativeElement = this.el.nativeElement;
    const items = this.carouselItems.toArray();

    const swipe$ = fromEvent(nativeElement, 'touchstart').pipe(
      tap((e: any) => {
        e.preventDefault();
        e.stopPropagation();
        items.forEach(item => {
          this.animateCarouselItem(item, null, 0);
        });
      }),
      switchMap((startEvent: TouchEvent) =>
        fromEvent(nativeElement, 'touchmove').pipe(
          tap((e: any) => {
            e.preventDefault();
            e.stopPropagation();
          }),
          takeUntil(fromEvent(nativeElement, 'touchend')),
          map((event: TouchEvent) => event.touches[0].pageX),
          scan((acc, pageX) => Math.round(startEvent.touches[0].pageX - pageX), 0),
          tap(data => {
            items.forEach(item => {
              const delta = this.DELTA_DIRECTION_COEFFICIENT * ((this.active - 1) * this.el.nativeElement.firstChild.clientWidth) - data;
              this.animateCarouselItem(item, delta, null);
            });
          }),
          takeLast(1)
        )
      ),
      takeUntil(this.destroyed$)
    );

    swipe$.subscribe(val => {
      if (val > this.moveThreshold && this.active < items.length) {
        this.active++;
      } else if (val < -1 * this.moveThreshold && this.active > 1) {
        this.active--;
      }

      items.forEach(item => {
        const delta = this.DELTA_DIRECTION_COEFFICIENT * ((this.active - 1) * this.el.nativeElement.firstChild.clientWidth);
        this.animateCarouselItem(item, delta, 300);
      });
    });
  }

  private animateCarouselItem(item: CarouselItemDirective, delta?: number, transitionTime?: number): void {
    if (!!transitionTime) {
      item.setTransition(transitionTime);
    }
    if (!!delta || delta === 0) {
      item.setStyle('transform', `translateX(${delta}px)`);
    }
  }

  public ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
