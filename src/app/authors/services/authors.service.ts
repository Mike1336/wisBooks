import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IAuthor, IAuthors } from '../interfaces/author';


@Injectable({
  providedIn: 'root',
})
export class AuthorsService {

  private apiUrl = 'http://muzhikov.kubesh.ru/api/';
  private authorsEndpoint = 'authors';

  constructor(private http: HttpClient) { }

  /**
   * Takes in an quantity and returns an authors list
   *
   * @param quantity A quantity of authors for getting list
   */
  public getAuthorsInQuantity(quantity: number): Observable<IAuthors> {
    return this.http.get<IAuthors>(`${this.apiUrl}${this.authorsEndpoint}?limit=${quantity}`);
  }

  /**
   * Takes in an id and returns an authors list
   *
   * @param authorId An author's id for getting list
   */
  public getAuthorById(authorId: number): Observable<object> {
    return this.http.get<IAuthor>(`${this.apiUrl}${this.authorsEndpoint}/${authorId}`);
  }

  /**
   * Takes in an author's object and returns an authors list
   *
   * @param author An author for create him in list
   */
  public createAuthor(author: IAuthor): Observable<object> {
    const url = `${this.apiUrl}${this.authorsEndpoint}`;

    return this.http.post<IAuthor>(url, author);
  }

  /**
   * Takes in an author's object and returns an authors list
   *
   * @param author An author for editing him in list
   */
  public updateAuthor(author: IAuthor): Observable<object> {
    const url = `${this.apiUrl}${this.authorsEndpoint}/${author.id}`;

    return this.http.put<IAuthor>(url, author);
  }

  /**
   * Takes in an anuthor's id and returns a list without the author
   *
   * @param authorId An author's id for delete him from list
   */
  public deleteAuthor(authorId: number): Observable<object> {
    return this.http.delete<IAuthor>(`${this.apiUrl}${this.authorsEndpoint}/${authorId}`);
  }


}