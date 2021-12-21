import { Component, OnInit } from '@angular/core';
import { OffersModel } from './../shared/offers.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class HomeComponent implements OnInit {
  public offers: OffersModel[] = [];

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService
      .getOffers(true)
      .subscribe((offers: OffersModel[]) => (this.offers = offers));
  }
}
