import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from '../interfaces/demand';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Pageable } from '../../core/interfaces/pageable';

@Injectable({
  providedIn: 'root'
})

export class DemandService {

  constructor(private http:HttpClient) { }

  getDemands():Observable<Pageable>{
    return this.http.get<Pageable>(`${environment.apiUrl}/demand/all`);
  }

  getDemandsByCity(city:string):Observable<HttpResponse<Pageable>>{
    return this.http.get<Pageable>(`${environment.apiUrl}/demand/city/${city}`, {observe: 'response'})
  }
}
