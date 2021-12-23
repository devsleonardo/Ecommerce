import { of, Observable, Subject, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
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
  public offers: Observable<OffersModel[]>;
  public offers2: OffersModel[];
  private subjectSearch: Subject<string> = new Subject<string>();

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offers = this.subjectSearch.pipe(
      debounceTime(1000), //executa a ação do switchMap após 1 segundo
      distinctUntilChanged(), //preveni que ocorra duas pesquisas idênticas
      switchMap((searchTerm: string) => {
        console.log('requisição http para api: ', searchTerm);
        if (searchTerm.trim() === '') {
          //retornar um observable de array de ofertas vazio caso preencha um campo vazio na pesquisa
          return of<OffersModel[]>([]);
        }
        return this.offersService.searchOffers(searchTerm);
      })
    );

    this.offers.subscribe((offers: OffersModel[]) => {
      this.offers2 = offers;
    });
  }
  public search(searchTerm: string): void {
    console.log('keyup caracter: ', searchTerm);
    this.subjectSearch.next(searchTerm); //requisiçao de caracteres
  }
}
