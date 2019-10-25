import {fromEvent, Subject, merge, interval, race, animationFrameScheduler, EMPTY, pipe} from 'rxjs';
import { AfterContentInit, Component, ContentChildren, ElementRef, QueryList, OnInit, OnDestroy } from '@angular/core';
import { map, takeLast, takeUntil, tap, switchMap, filter, mapTo, share, repeatWhen, observeOn } from 'rxjs/operators';

import { CarouselItemDirective } from './carousel-item.directive';
import { preventEventPropagation } from './util';

const calculateDelta = (startEvent, items) => pipe(
  map((event: any) => event.pageX),
  map((pageX) => Math.round(startEvent.pageX - pageX)),
  tap(data => {
    items.forEach(item => {
      const delta = this.DELTA_DIRECTION_COEFFICIENT * ((this.active - 1) * this.el.nativeElement.firstChild.clientWidth) - data;
      this.animateCarouselItem(item, delta, null);
    });
  })
);

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
  private goToPrevPage = 0;
  private goToNextPage = 0;
  public active = 1;

  private destroyed$ = new Subject<void>();

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    this.moveThreshold = (this.el.nativeElement.firstChild.clientWidth * this.MOVE_THRESHOLD_IN_PERCENT) / 100;
    this.goToPrevPage = -1 * this.moveThreshold - 1;
    this.goToNextPage = this.moveThreshold + 1;
  }

  public ngAfterContentInit(): void {
    const nativeElement = this.el.nativeElement;
    const items = this.carouselItems.toArray();

    const touchStart$ = merge(
      fromEvent(nativeElement, 'touchstart').pipe(
        preventEventPropagation,
        map((event: any) => event.touches[0])
      ),
      fromEvent(nativeElement, 'mousedown').pipe(
        preventEventPropagation
      )
    ).pipe(
      tap((e: Event) => {
        items.forEach(item => {
          this.animateCarouselItem(item, null, 0);
        });
      })
    );

    const touchMove$ = (startEvent) => merge(
      fromEvent(nativeElement, 'touchmove').pipe(
        preventEventPropagation,
        map((event: any) => event.touches[0])),
      fromEvent(nativeElement, 'mousemove').pipe(
        preventEventPropagation
      )
    ).pipe( );

    const swipe$ = touchStart$.pipe( );

    const leftArrow$ = EMPTY;

    const rightArrow$ = EMPTY;

    const events$ =  EMPTY;

    const timer$ = EMPTY;


    merge(events$, timer$).pipe(
      tap(val => {
        if (val > this.moveThreshold && this.active < items.length) {
          this.active++;
        } else if (val < -1 * this.moveThreshold && this.active > 1) {
          this.active--;
        }

        items.forEach(item => {
          const delta = this.DELTA_DIRECTION_COEFFICIENT * ((this.active - 1) * this.el.nativeElement.firstChild.clientWidth);
          this.animateCarouselItem(item, delta, 300);
        });
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
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

  private animateBackToFirstSlide(items) {
    if (this.active >= items.length) {
      this.active = 0;
      items.forEach(item => {
        this.animateCarouselItem(item, 0, 300);
      });
    }
  }
}
