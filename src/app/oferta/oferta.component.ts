import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from '../offers.service';
import { OffersModel } from '../shared/model/offers.model';

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
    this.route.params.subscribe((param: Params) => {
      this.offersService
        .getOffersId(param['id'])
        .subscribe((offers: OffersModel[]) => (this.offers = offers));
    });
  }

  //remoção das subscribe
  ngOnDestroy(): void {}
}
