import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AuthModule } from './modules/auth/auth.module';
import { OfferModule } from './modules/offer/offer.module';
import { CoreModule } from './modules/core/core.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SiteLayoutComponent } from './_layouts/site-layout/site-layout.component';
import { AppLayoutComponent } from './_layouts/app-layout/app-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    SiteLayoutComponent,
    AppLayoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    OfferModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    RouterModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
