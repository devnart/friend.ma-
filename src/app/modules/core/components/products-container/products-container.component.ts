import { Component, Input, OnInit } from '@angular/core';
import { OfferService } from 'src/app/modules/offer/services/offer.service';
import { DemandService } from 'src/app/modules/demand/services/demand.service';
import { Offer } from 'src/app/modules/offer/interfaces/offer';
import { Demand } from 'src/app/modules/demand/interfaces/demand';
import { Observable,forkJoin } from 'rxjs';
import { Merged } from '../../interfaces/merged';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {

  @Input() offers: Offer[];
  @Input() demands: Demand[];
  products: Merged[];

  constructor(private offerService:OfferService, private demandService:DemandService ) { }

  ngOnInit(): void {
    this.nestedProducts().subscribe(data=>{

      this.products = [...data[0],...data[1]].sort((a,b)=>{
        const randomTrueOrFalse = Math.random() > 0.5;
        return randomTrueOrFalse ? 1 : -1
        // return Date.parse(a.createdDate) - Date.parse(b.createdDate) 
      });

      console.log(this.products)
    })
  }
  
  nestedProducts():Observable<any[]>{
    let offers = this.offerService.getOffers();
    let demands = this.demandService.getDemands();
    return forkJoin([offers,demands]);
  }

}
