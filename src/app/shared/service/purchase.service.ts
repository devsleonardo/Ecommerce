import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PurchaseModel } from '../model/purchase.model';
import { URL_API } from '../model/api.model';
import { map } from 'rxjs/operators';

@Injectable()
export class PurchaseService {
  constructor(private http: HttpClient) {}

  public readPurchase(read: PurchaseModel): Observable<any> {
    return this.http.post<any>(`${URL_API}/compra`, read).pipe(map((res) => res.id));
  }
}
