import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TipsHomeComponent } from './tips-home/tips-home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { TipperInformationComponent } from './tipper-information/tipper-information.component';
import { TipsConfirmationComponent } from './tips-confirmation/tips-confirmation.component';
import { TipService } from './_service/tip.service';
import { AlertService } from './_service/alert.service';
import { AlertComponent } from './_directive/alert.component';
import { HttpModule } from '@angular/http';
import { UploadModule } from './upload/upload.module';



@NgModule({
  declarations: [
    AppComponent,
    TipsHomeComponent,
    NavbarComponent,
    TipperInformationComponent,
    TipsConfirmationComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    UploadModule
  ],
  providers: [TipService, AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
