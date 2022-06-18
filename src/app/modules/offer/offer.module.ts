import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowOfferComponent } from './pages/show-offer/show-offer.component';
import { ContactCardComponent } from '../core/components/contact-card/contact-card.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    
    ShowOfferComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
  ]
})
export class OfferModule { }
