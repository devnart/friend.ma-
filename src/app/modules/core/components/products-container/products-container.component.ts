import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/modules/offer/services/offer.service';
import { Offer } from 'src/app/modules/offer/interfaces/offer';

@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {

  products: Offer[];
  constructor(private offerService:OfferService) { }

  ngOnInit(): void {
    this.offerService.getOffers().subscribe(data=>{
      this.products = data;
    })
  }

}
