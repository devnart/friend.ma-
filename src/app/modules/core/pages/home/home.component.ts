import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/modules/product/services/product.service';
import { Product } from 'src/app/modules/product/interfaces/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService:ProductService,private route:Router ) { }

  ngOnInit(): void {
    this.getProducts();
  }


  onClick(){
    this.route.navigate(['/all']);
  }

  getProducts() : void{
    this.productService.getProducts(0,6).subscribe(data => {
      this.products = data.content;
      console.log(this.products);
    })
  }
}
