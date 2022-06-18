import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pageable } from '../../core/interfaces/pageable';
@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http:HttpClient) { }

  getProducts(page:number = 0,size:number = 10):Observable<Pageable>{
    return this.http.get<Pageable>(`${environment.apiUrl}/products?page=${page}&size=${size}`);
  }

  getProductsByCity(city:string | null,page:number = 0,size:number = 10):Observable<Pageable>{
    return this.http.get<Pageable>(`${environment.apiUrl}/products/city/${city}?page=${page}&size=${size}`);
  }
}
