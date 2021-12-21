import { OffersService } from './../../offers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.scss'],
  providers: [OffersService], // Trazer um componente Service!
})
export class ComoUsarComponent implements OnInit {
  public comoUsar: string = '';
  constructor(private route: ActivatedRoute, private offersService: OffersService) {}

  ngOnInit(): void {
    this.offersService
      .getOffersOfertasId('como-usar', this.route.snapshot.params['id']) /*Snapshot*/
      .subscribe((offers: string) => (this.comoUsar = offers));
    console.log(this.route.snapshot.paramMap.get('id'));
  }
}
