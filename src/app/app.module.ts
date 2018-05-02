import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { DynamicallyAnimatedBoxComponent } from './dynamically-animated-box/dynamically-animated-box.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    DynamicallyAnimatedBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
