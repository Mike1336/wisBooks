import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IGenre } from './../interfaces/genre';


@Injectable({
  providedIn: 'root',
})
export class GenresService {

  private apiUrl = 'http://muzhikov.kubesh.ru/api/';
  private genresEndpoint = 'genres';

  constructor(private http: HttpClient) { }

  public getGenres(): Observable<object> {
    return this.http.get<IGenre[]>(`${this.apiUrl}${this.genresEndpoint}`);
  }
  public getGenreById(genreId: number): Observable<object> {
    return this.http.get<IGenre>(`${this.apiUrl}${this.genresEndpoint}/${genreId}`);
  }
  public createGenre(genre: IGenre): Observable<object> {
    const url = `${this.apiUrl}${this.genresEndpoint}`;

    return this.http.post<IGenre>(url, genre);
  }

}
