import { Component, ViewEncapsulation } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <span>{{obs$ | async}}</span>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  obs$ = interval(3000);
}
