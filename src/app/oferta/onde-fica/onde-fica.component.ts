import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OffersService } from 'src/app/offers.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class OndeFicaComponent implements OnInit {
  public ondeFica: string = '';
  constructor(private route: ActivatedRoute, private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService
      .getOffersOfertasId('onde-fica', this.route.snapshot.params['id']) /*Snapshot*/
      .subscribe((offers: string) => (this.ondeFica = offers));
  }
}
