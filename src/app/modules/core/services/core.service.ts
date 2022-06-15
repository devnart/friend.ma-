import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,forkJoin } from 'rxjs';
import { DemandService } from '../../demand/services/demand.service';
import { OfferService } from '../../offer/services/offer.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor(private http:HttpClient, private offerService:OfferService, private demandService:DemandService ) { }

  nestedProducts():Observable<any[]>{
    let offers = this.offerService.getOffers();
    let demands = this.demandService.getDemands();
    return forkJoin([offers,demands]);
  }
}
