import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../interfaces/offer';
import { Pageable } from '../../core/interfaces/pageable';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http:HttpClient) { }

  getOffers():Observable<Pageable>{
    return this.http.get<Pageable>(`${environment.apiUrl}/offer/all`);
  }

  getOffersByCity(city:string):Observable<HttpResponse<Pageable>>{
    return this.http.get<Pageable>(`${environment.apiUrl}/offer/city/${city}`, {observe: 'response'});
  }

  getOfferById(id:number):Observable<HttpResponse<Offer>>{
    return this.http.get<Offer>(`${environment.apiUrl}/offer/${id}`, {observe: 'response'});
  }

  createOffer(offer:FormData):Observable<Offer>{
    // formData.append('im', offer)
    return this.http.post<Offer>(`${environment.apiUrl}/offer`, offer);
  }
  
}
