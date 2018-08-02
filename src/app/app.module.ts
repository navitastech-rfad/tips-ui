import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TipsHomeComponent } from './tips-home/tips-home.component';
import { AppRoutingModule } from './/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TipperInformationComponent } from './tipper-information/tipper-information.component';
import { TipsConfirmationComponent } from './tips-confirmation/tips-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    TipsHomeComponent,
    NavbarComponent,
    TipperInformationComponent,
    TipsConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
