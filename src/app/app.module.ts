import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GridsterModule } from 'angular-gridster2';
import { ImageEgComponent } from './components/image-eg/image-eg.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    ImageEgComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GridsterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
