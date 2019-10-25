import { Component, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
  <app-carousel>
    <div appCarouselItem class="item">
      <div style="background-image: url('https://source.unsplash.com/random?1')"></div>
    </div>
    <div appCarouselItem class="item">
      <div style="background-image: url('https://source.unsplash.com/random?2')"></div>
    </div>
    <div appCarouselItem class="item">
      <div style="background-image: url('https://source.unsplash.com/random?3')"></div>
    </div>
  </app-carousel>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
}
