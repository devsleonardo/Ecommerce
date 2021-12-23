import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OffersService } from 'src/app/offers.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: any;
  constructor(private route: ActivatedRoute, private offersService: OffersService) {}

  ngOnInit(): void {
    this.route.parent.params.subscribe((param: Params) => {
      this.offersService
        .getOffersOfertasOndeId(param['id'])
        .subscribe((parame: string) => (this.ondeFica = parame));
    });
  }
}
