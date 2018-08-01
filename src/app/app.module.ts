import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TipsHomeComponent } from './tips-home/tips-home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TipperInformationComponent } from './tipper-information/tipper-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TipsHomeComponent,
    NavbarComponent,
    TipperInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
