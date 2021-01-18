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
   * @param value A quantity of authors for getting list
   */
  public getInQuantity(value: number): Observable<IAuthors> {
    return this.http.get<IAuthors>(`${this.apiUrl}${this.authorsEndpoint}?limit=${value}`);
  }

  /**
   * Takes in an id and returns an authors list
   *
   * @param id An author's id for getting list
   */
  public getById(id: number): Observable<IAuthor> {
    return this.http.get<IAuthor>(`${this.apiUrl}${this.authorsEndpoint}/${id}`);
  }

  /**
   * Takes in an author's object and returns an authors list
   *
   * @param author An author for create him in list
   */
  public create(author: IAuthor): Observable<IAuthor> {
    const url = `${this.apiUrl}${this.authorsEndpoint}`;

    return this.http.post<IAuthor>(url, author);
  }

  /**
   * Takes in an author's object and returns an authors list
   *
   * @param author An author for editing him in list
   */
  public update(author: IAuthor): Observable<IAuthor> {
    const url = `${this.apiUrl}${this.authorsEndpoint}/${author.id}`;

    return this.http.put<IAuthor>(url, author);
  }

  /**
   * Takes in an anuthor's id and returns a list without the author
   *
   * @param id An author's id for delete him from list
   */
  public delete(id: number): Observable<IAuthor> {
    return this.http.delete<IAuthor>(`${this.apiUrl}${this.authorsEndpoint}/${id}`);
  }


}