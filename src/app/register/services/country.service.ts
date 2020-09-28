import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {

  private _apiUrl = 'https://restcountries.eu/rest/v2';

  constructor(private _http: HttpClient) { }

  public getAllCountries(): Observable<object[]> {
    return this._http.get<object[]>(`${this._apiUrl}/name/all`);
  }

  public getCountryByName(countryName: string): Observable<object> {
    return this._http.get<object>(`${this._apiUrl}/name/${countryName}`);
  }

}
