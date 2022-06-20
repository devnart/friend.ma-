import { Component, OnInit } from '@angular/core';
import { Demand } from '../../interfaces/demand';
import { Router, ActivatedRoute } from '@angular/router';
import { DemandService } from '../../services/demand.service';
@Component({
  selector: 'app-show-demand',
  templateUrl: './show-demand.component.html',
  styleUrls: ['./show-demand.component.scss'],
})
export class ShowDemandComponent implements OnInit {
  demand: Demand;
  id: number;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private demandService: DemandService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
      console.log('product id:', this.id);
      this.getProduct(this.id);
    });
  }

  getProduct(id: number) {
    this.demandService.getDemandById(id).subscribe({
      next: (offer) => {
        this.demand = offer.body!;
        console.log(offer.body);
      },
      error: (err) => {
        err.status === 404 ? this.router.navigate(['/404']) : console.log(err);
      },
    });
  }
}
