import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AppComponent } from './app.component';
import { CarouselModule } from './carousel/carousel.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CarouselModule
  ],
  providers: [],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('rxjs-slider', el);
  }
  ngDoBootstrap() { }

}
