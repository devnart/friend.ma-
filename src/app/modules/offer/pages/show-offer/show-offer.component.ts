import { Component, OnInit } from '@angular/core';
import { OfferService } from '../../services/offer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Offer } from '../../interfaces/offer';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-show-offer',
  templateUrl: './show-offer.component.html',
  styleUrls: ['./show-offer.component.scss'],
})
export class ShowOfferComponent implements OnInit {
  id: number;
  offer: Offer;
  url: string = environment.apiUrl;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private offerService: OfferService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.getProduct(this.id);
      
    });
  }

  getProduct(id: number) {
      this.offerService.getOfferById(id).subscribe({
         next: (offer) => {this.offer = offer.body!; console.log(offer.body)},
          error: (err) => {err.status === 404 ? this.router.navigate(['/404']) : console.log(err)}
      })
  }
}
