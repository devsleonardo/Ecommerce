import { OffersService } from './../offers.service';
import { Component, OnInit } from '@angular/core';
import { OffersModel } from '../shared/offers.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class DiversaoComponent implements OnInit {
  public offers: OffersModel[] = [];
  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService
      .getOffersTag('diversao')
      .subscribe((offers: OffersModel[]) => (this.offers = offers));
  }
}
