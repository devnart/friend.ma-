import { Component, Injectable, OnInit } from '@angular/core';
import { Product } from 'src/app/modules/product/interfaces/product';
import { cities } from 'src/CITIES';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferService } from 'src/app/modules/offer/services/offer.service';
import { DemandService } from 'src/app/modules/demand/services/demand.service';
import { Offer } from 'src/app/modules/offer/interfaces/offer';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss'],
})

@Injectable({
  providedIn:'root'
})

export class CityComponent implements OnInit {
  currentPage = 0;
  lastPage: boolean = false;
  products: Product[];
  empty: boolean = false;
  loading: boolean = false;
  cleared: boolean = true;
  city: string;
  types = ['Offer', 'Demand'];
  budgets = [
    '0DH - 500DH',
    '500DH - 1000DH',
    '1000DH - 1500DH',
    '1500DH - 2000DH',
    '+2000DH',
  ];

  cities = cities.map((city) => {
    return {
      name: city.ville,
    };
  });
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService,
    private demandService: DemandService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.city = params['city'];
      this.getProducts(this.city);
    });
  }

  handleSelectedCity(event: any) {
    this.cleared = false;
  }

  selectedType(type: string) {
    if (type == 'Offer') {
      this.offerService.getOffersByCity(this.city).subscribe((offers) => {
        if (offers.status != 200) {
          this.products = [];
          this.cleared = false;
          this.empty = true;
        } else {
          this.empty = false;
          this.products = offers.body?.content ?? [];
        }
      });
    } else if (type == 'Demand') {
      this.demandService.getDemandsByCity(this.city).subscribe((demands) => {
        if (demands.status == 200) {
          this.products = demands.body?.content ?? [];
          this.empty = false;
        } else {
          this.products = [];
          this.cleared = false;
          this.empty = true;
        }
      });
    }
console.log(this.products);
    return this.products;
  }

  loadMore() {
    this.loading = true;
    console.log('load more' + this.currentPage);
    this.currentPage++;

    this.productService
      .getProductsByCity(this.city, this.currentPage, 4)
      .subscribe((products) => {
        products.last ? (this.lastPage = true) : (this.lastPage = false);
        this.products = this.products.concat(products.content);
        this.loading = false;
      });
  }

  getProducts(city: string) {
    this.productService.getProductsByCity(city).subscribe((products) => {
      products.last ? (this.lastPage = true) : (this.lastPage = false);
      this.products = products.content;
    });
  }

  resetFilters() {
    this.cleared = true;
    this.router.navigate(['/all']);
  }
}
