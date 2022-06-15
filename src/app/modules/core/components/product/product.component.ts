import { Component, OnInit, Input } from '@angular/core';
import { Offer } from 'src/app/modules/offer/interfaces/offer';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() offer: Offer = {} as Offer;

  constructor() { }

  ngOnInit(): void {
  }

}
