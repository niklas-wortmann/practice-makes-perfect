import { Component, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `

  <app-carousel>
  <div appCarouselItem class="item">
    <span>1</span>
  </div>
  <div appCarouselItem class="item">
    <span>2</span>
  </div>
  <div appCarouselItem class="item">
    <span>3</span>
  </div>
</app-carousel>
  `,
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
}
