import { Component, Input, OnInit } from '@angular/core';
import { Offer } from 'src/app/modules/offer/interfaces/offer';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Input() offers: Offer[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
