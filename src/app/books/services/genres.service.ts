import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IGenre, IGenres } from './../interfaces/genre';


@Injectable({
  providedIn: 'root',
})
export class GenresService {

  private _apiUrl = 'http://muzhikov.kubesh.ru/api/';
  private _genresEndpoint = 'genres';

  constructor(private _http: HttpClient) { }

  public getGenresInQuantity(quantity: number): Observable<IGenres> {
    return this._http.get<IGenres>(`${this._apiUrl}${this._genresEndpoint}?limit=${quantity}`);
  }
  public getGenreById(genreId: number): Observable<object> {
    return this._http.get<IGenre>(`${this._apiUrl}${this._genresEndpoint}/${genreId}`);
  }
  public createGenre(genre: IGenre): Observable<object> {
    const url = `${this._apiUrl}${this._genresEndpoint}`;

    return this._http.post<IGenre>(url, genre);
  }

}
