import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { HomePageModule } from './full-Page/home-Page/home-page.module';

import { TokenService } from './service/core/token.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HomePageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
  ],
  providers: [TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
