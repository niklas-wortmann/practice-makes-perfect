import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { CarouselItemDirective } from './carousel-item.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [CarouselComponent, CarouselItemDirective],
  exports: [CarouselComponent, CarouselItemDirective]
})
export class CarouselModule {}
