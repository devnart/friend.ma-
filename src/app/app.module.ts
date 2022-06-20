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
import { DemandModule } from './modules/demand/demand.module';
import { AuthGuard } from './auth.guard';

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
    DemandModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoreModule,
    RouterModule,

  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
