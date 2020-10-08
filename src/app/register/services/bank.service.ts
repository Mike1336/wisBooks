import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BankService {

  private _apiUrl = 'https://api.cardinfo.online?apiKey=e8dafbbe74c16ffd7c6cbf0e90da58e0';


  constructor(private _http: HttpClient) { }

  public getCardInfo(cardNumber: string): Observable<object> {
    return this._http.get<object>(`${this._apiUrl}&input=${cardNumber}`);
  }

}
