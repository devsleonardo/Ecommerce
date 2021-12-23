import { OffersService } from './../../offers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: any;
  constructor(private route: ActivatedRoute, private offersService: OffersService) {}

  ngOnInit(): void {
    this.route.parent.params.subscribe((param: Params) => {
      this.offersService
        .getOffersOfertasId(param['id']) /*Snapshot*/
        .subscribe((parame: string) => (this.comoUsar = parame));
    });
  }
}
