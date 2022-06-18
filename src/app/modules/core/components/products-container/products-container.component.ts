import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-products-container',
  templateUrl: './products-container.component.html',
  styleUrls: ['./products-container.component.scss']
})
export class ProductsContainerComponent implements OnInit {
  @Input() layout:string = 'flex';

  constructor() { }

  ngOnInit(): void {
  }

}
