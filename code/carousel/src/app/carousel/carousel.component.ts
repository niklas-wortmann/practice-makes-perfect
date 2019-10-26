import { fromEvent, Subject, merge, interval, race, animationFrameScheduler } from 'rxjs';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  ElementRef,
  QueryList,
  OnInit,
  OnDestroy
} from '@angular/core';
import {
  map,
  takeLast,
  takeUntil,
  tap,
  switchMap,
  filter,
  mapTo,
  share,
  repeatWhen,
  observeOn
} from 'rxjs/operators';

import { CarouselItemDirective } from './carousel-item.directive';
import { preventEventPropagation } from './util';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements
  OnInit, AfterContentInit, OnDestroy {

  @ContentChildren(CarouselItemDirective) carouselItems:
    QueryList<CarouselItemDirective>;

  private readonly DELTA_DIRECTION_COEFFICIENT = -1;
  private readonly MOVE_THRESHOLD = 15;
  private moveThreshold = 0;
  private goToPrevPage = 0;
  private goToNextPage = 0;
  public active = 1;

  private destroyed$ = new Subject<void>();

  constructor(private el: ElementRef) {
  }

  ngOnInit(): void {
    const clientWidth = this.el.nativeElement.firstChild.clientWidth;
    this.moveThreshold = (clientWidth * this.MOVE_THRESHOLD) / 100;
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
    ).pipe(
      observeOn(animationFrameScheduler),
      takeUntil(
        race(
          fromEvent(nativeElement, 'touchend'),
          fromEvent(nativeElement, 'mouseup')
        )
      ),
      map((event) => event.pageX),
      map((pageX) => Math.round(startEvent.pageX - pageX)),
      tap(data => {
        items.forEach(item => {
          const delta = this.DELTA_DIRECTION_COEFFICIENT *
            ((this.active - 1) *
              this.el.nativeElement.firstChild.clientWidth) - data;
          this.animateCarouselItem(item, delta, null);
        });
      }),
      takeLast(1)
    );

    const swipe$ = touchStart$.pipe(
      switchMap((startEvent: TouchEvent) => touchMove$(startEvent)),
    );

    const leftArrow$ = fromEvent(document, 'keydown').pipe(
      filter((event: KeyboardEvent) => event.code === 'KeyA'),
      mapTo(this.goToPrevPage)
    );

    const rightArrow$ = fromEvent(document, 'keydown').pipe(
      filter((event: KeyboardEvent) => event.code === 'KeyD'),
      mapTo(this.goToNextPage)
    );

    const events$ =  merge(swipe$, leftArrow$, rightArrow$).pipe(
      share()
    );

    const timer$ = interval(5000).pipe(
        takeUntil(events$),
        repeatWhen(source => source),
        tap(() => {
          if (this.active >= items.length) {
            this.active = 0;
            items.forEach(item => {
              this.animateCarouselItem(item, 0, 300);
            });
          }
        }),
        mapTo(this.goToNextPage)
      );


    merge(events$, timer$).pipe(
      tap(val => {
        if (val > this.moveThreshold && this.active < items.length) {
          this.active++;
        } else if (val < -1 * this.moveThreshold && this.active > 1) {
          this.active--;
        }

        items.forEach(item => {
          const delta = this.DELTA_DIRECTION_COEFFICIENT *
            ((this.active - 1) *
              this.el.nativeElement.firstChild.clientWidth);
          this.animateCarouselItem(item, delta, 300);
        });
      }),
      takeUntil(this.destroyed$)
    ).subscribe();
  }

  private animateCarouselItem(
    item: CarouselItemDirective,
    delta?: number,
    transitionTime?: number
  ): void {
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
