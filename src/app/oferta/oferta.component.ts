import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from '../offers.service';
import { OffersModel } from '../shared/offers.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class OfertasComponent implements OnInit, OnDestroy {
  public offers: OffersModel[];
  constructor(private route: ActivatedRoute, private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService
      .getOffersId(this.route.snapshot.params['id'] /*Snapshot*/)
      .subscribe((offers: OffersModel[]) => (this.offers = offers));
  }

  //remoção das subscribe
  ngOnDestroy(): void {}
}
