import { OffersService } from 'src/app/offers.service';
import { OffersModel } from './../shared/offers.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers: [OffersService],
})
export class NavbarComponent implements OnInit {
  public offers: OffersModel[];
  constructor(private offersService: OffersService) {}

  ngOnInit(): void {}

  public search(searchTerm: string): void {
    this.offersService
      .searchOffers(searchTerm)
      .subscribe((offers: OffersModel[]) => (this.offers = offers));
    console.log(this.offers);
  }
}
