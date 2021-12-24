import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { OffersModel } from '../shared/model/offers.model';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class RestaurantesComponent implements OnInit {
  public offers: OffersModel[];

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService
      .getOffersTag('restaurante')
      .subscribe((offers: OffersModel[]) => (this.offers = offers));
  }
}
