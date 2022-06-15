import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demand } from '../interfaces/demand';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemandService {

  constructor(private http:HttpClient) { }

  getDemands():Observable<Demand[]>{
    return this.http.get<Demand[]>(`${environment.apiUrl}/demand/all`);
  }
}
