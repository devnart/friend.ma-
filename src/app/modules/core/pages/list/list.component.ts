import { Component, OnInit } from '@angular/core';
import { cities } from 'src/CITIES';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { Product } from 'src/app/modules/product/interfaces/product';
import { Router } from '@angular/router';
import { CityComponent } from '../city/city.component';
import { OfferService } from 'src/app/modules/offer/services/offer.service';
import { DemandService } from 'src/app/modules/demand/services/demand.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  currentPage = 0;
  lastPage: boolean = false;
  products: Product[] = [];
  selectedCity: string = '';
  cleared: boolean = true;
  loading: boolean = false;
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
    private router: Router,
    private cityComponent: CityComponent,
    private offerService: OfferService,
    private demandService: DemandService
  ) {}

  ngOnInit(): void {
this.getProducts();
  }

  handleSelectedCity(city: string) {}

  getProducts(){
    this.productService.getProducts().subscribe((products) => {
      products.last ? (this.lastPage = true) : (this.lastPage = false);
      this.products = products.content;
      console.log(products);
    });
  }
  selectedType(type: string) {
    if (type == 'Offer') {
      this.offerService.getOffers().subscribe((offers) => {
        if (offers.empty) {
          this.products = [];
          this.cleared = true;
        } else {
          this.cleared = false;
          this.products = offers.content;
        }
      });
    } else if (type == 'Demand') {
      this.demandService.getDemands().subscribe((demands) => {
        if (demands.empty) {
          this.products = [];
          this.cleared = true;
        } else {
          this.cleared = false;
          this.products = demands.content;
        }
      });
    }
  }

  loadMore() {
    this.loading = true;
    console.log('load more' + this.currentPage);
    this.currentPage++;

    this.productService.getProducts(this.currentPage).subscribe((products) => {
      products.last ? (this.lastPage = true) : (this.lastPage = false);
      setTimeout(() => {
        this.products = this.products.concat(products.content);
        this.loading = false;
      }, 1000);
    });
  }

  resetFilters() {
    this.cleared = true;
    this.getProducts();
  }
}
