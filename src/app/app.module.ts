import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ClassicModule, KaartModule } from '@wegenenverkeer/ng-kaart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    KaartModule.withDefaults(),
    ClassicModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

