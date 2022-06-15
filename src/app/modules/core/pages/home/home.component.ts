import { Component, Input, OnInit, Output } from '@angular/core';
import { Demand } from 'src/app/modules/demand/interfaces/demand';
import { Offer } from 'src/app/modules/offer/interfaces/offer';
import { Observable,forkJoin } from 'rxjs';
import { DemandService } from 'src/app/modules/demand/services/demand.service';
import { OfferService } from 'src/app/modules/offer/services/offer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() offers: Offer[];
  @Input() demands: Demand[];

  products: any[];
  constructor(private offerService:OfferService, private demandService:DemandService ) { }

  ngOnInit(): void {
    this.nestedProducts().subscribe(data=>{
      this.products = data;
    })
  }
  
  nestedProducts():Observable<any[]>{
    let offers = this.offerService.getOffers();
    let demands = this.demandService.getDemands();
    return forkJoin([offers,demands]);
  }
}
