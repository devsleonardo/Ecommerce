import { OffersModel } from './shared/model/offers.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from './shared/model/api.model';
import { map } from 'rxjs/operators';

@Injectable()
export class OffersService {
  constructor(private http: HttpClient) {}

  public getOffers(stats: boolean): Observable<OffersModel[]> {
    return this.http.get<OffersModel[]>(`${URL_API}/ofertas?destaque=${stats}`);
  }

  public getOffersTag(tag: string): Observable<OffersModel[]> {
    return this.http.get<OffersModel[]>(`${URL_API}/ofertas?categoria=${tag}`);
  }

  public getOffersId(id: number): Observable<OffersModel[]> {
    return this.http.get<OffersModel[]>(`${URL_API}/ofertas?id=${id}`);
  }

  public getOffersOfertasId(id: string): Observable<string> {
    return this.http
      .get<any>(`${URL_API}/como-usar?id=${id}`)
      .pipe(map((res) => res.descricao));
  }

  public getOffersOfertasOndeId(id: string): Observable<string> {
    return this.http
      .get<any>(`${URL_API}/onde-fica?id=${id}`)
      .pipe(map((res) => res.descricao));
  }

  public searchOffers(term: string): Observable<OffersModel[]> {
    return this.http.get<OffersModel[]>(`${URL_API}/ofertas?descricao_oferta_like=${term}`);
    //"like" depende da Api
  }
}
