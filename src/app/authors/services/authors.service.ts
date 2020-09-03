import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IAuthor, IAuthors } from '../interfaces/author';


@Injectable({
  providedIn: 'root',
})
export class AuthorService {

  private apiUrl = 'http://muzhikov.kubesh.ru/api/';
  private authorsEndpoint = 'authors';

  constructor(private http: HttpClient) { }

  public getAuthorsInPage(page: number): Observable<IAuthors> {
    return this.http.get<IAuthors>(`${this.apiUrl}${this.authorsEndpoint}?page=${page}`);
  }
  public getAuthorById(authorId: number): Observable<object> {
    return this.http.get<IAuthor>(`${this.apiUrl}${this.authorsEndpoint}/${authorId}`);
  }
  public createAuthor(author: IAuthor): Observable<object> {
    const url = `${this.apiUrl}${this.authorsEndpoint}`;

    return this.http.post<IAuthor>(url, author);
  }
  public updateAuthor(author: IAuthor): Observable<object> {
    const url = `${this.apiUrl}${this.authorsEndpoint}/${author.id}`;

    return this.http.put<IAuthor>(url, author);
  }
  public deleteAuthor(authorId: number): Observable<object> {
    return this.http.delete<IAuthor>(`${this.apiUrl}${this.authorsEndpoint}/${authorId}`);
  }


}