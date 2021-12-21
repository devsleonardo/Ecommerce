import { OffersModel } from './shared/offers.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { URL_API } from './shared/api.model';

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

  public getOffersOfertasId(nav: string, id: any): Observable<string> {
    return this.http.get<string>(`${URL_API}/${nav}?id=${id}`);
  }
}
