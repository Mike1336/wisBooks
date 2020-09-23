import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IAuthor, IAuthors } from './../interfaces/author';


@Injectable({
  providedIn: 'root',
})
export class AuthorService {

  private _apiUrl = '_http://muzhikov.kubesh.ru/api/';
  private _authorsEndpoint = 'authors';

  constructor(private _http: HttpClient) { }

  public getAuthorsInPage(page: number): Observable<IAuthors> {
    return this._http.get<IAuthors>(`${this._apiUrl}${this._http}?page=${page}`);
  }
  public getAuthorById(authorId: number): Observable<object> {
    return this._http.get<IAuthor>(`${this._apiUrl}${this._http}/${authorId}`);
  }
  public createAuthor(author: IAuthor): Observable<object> {
    const url = `${this._apiUrl}${this._http}`;

    return this._http.post<IAuthor>(url, author);
  }
  public updateAuthor(author: IAuthor): Observable<object> {
    const url = `${this._apiUrl}${this._http}/${author.id}`;

    return this._http.put<IAuthor>(url, author);
  }
  public deleteAuthor(authorId: number): Observable<object> {
    return this._http.delete<IAuthor>(`${this._apiUrl}${this._http}/${authorId}`);
  }


}