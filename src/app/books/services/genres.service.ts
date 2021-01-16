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

  public getInQuantity(quantity: number): Observable<IGenres> {
    return this._http.get<IGenres>(`${this._apiUrl}${this._genresEndpoint}?limit=${quantity}`);
  }

  public getById(genreId: number): Observable<IGenre> {
    return this._http.get<IGenre>(`${this._apiUrl}${this._genresEndpoint}/${genreId}`);
  }

  public create(genre: IGenre): Observable<IGenre> {
    const url = `${this._apiUrl}${this._genresEndpoint}`;

    return this._http.post<IGenre>(url, genre);
  }

  public update(genre: IGenre): Observable<IGenre> {
    const url = `${this._apiUrl}${this._genresEndpoint}/${genre.id}`;

    return this._http.put<IGenre>(url, genre);
  }

  public delete(id: number): Observable<IGenre> {
    const url = `${this._apiUrl}${this._genresEndpoint}/${id}`;

    return this._http.delete<IGenre>(url);
  }


}
