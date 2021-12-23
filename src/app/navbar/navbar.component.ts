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
  private subjectSearch: Subject<string> = new Subject<string>();

  constructor(private offersService: OffersService) {}

  ngOnInit(): void {
    this.offers = this.subjectSearch.pipe(
      debounceTime(1000), //executa a ação do switchMap após 1 segundo
      distinctUntilChanged(), //preveni que ocorra duas pesquisas idênticas
      switchMap((searchTerm: string) => {
        if (searchTerm.trim() === '') {
          //retornar um observable de array de ofertas vazio caso preencha um campo vazio na pesquisa
          return of<OffersModel[]>([]);
        }
        return this.offersService.searchOffers(searchTerm);
      })
    );
  }
  public search(searchTerm: string): void {
    this.subjectSearch.next(searchTerm); //requisiçao de caracteres
  }

  public clearSearch(): void {
    this.subjectSearch.next('');
  }
}
