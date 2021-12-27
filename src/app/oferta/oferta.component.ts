import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersModel } from '../shared/model/offers.model';
import { OffersService } from '../offers.service';
import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class OfertasComponent implements OnInit, OnDestroy {
  public offers: OffersModel[] = [];
  constructor(
    private route: ActivatedRoute,
    private offersService: OffersService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.cartService.exibirItens();

    this.route.params.subscribe((param: Params) => {
      this.offersService
        .getOffersId(param['id'])
        .subscribe((offers: OffersModel[]) => (this.offers = offers));
    });
  }

  //remoção das subscribe
  ngOnDestroy(): void {}

  public adicionarItemCarrinho(offers: OffersModel): void {
    this.cartService.incluirItem(offers);
    this.cartService.exibirItens();
  }
}
