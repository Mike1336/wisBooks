import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class GeodataService {

  private _apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?language=en&key=${environment.apiKey}`;

  constructor(private _http: HttpClient) { }

  public getAddressByQuery(query: string): Observable<object> {
    return this._http.get(`${this._apiUrl}&address=${query}`);
  }

}
