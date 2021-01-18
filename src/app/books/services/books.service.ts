import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Ransack, RansackMethod } from './../ransack/ransack';
import { IBook, IBooks } from './../interfaces/book';
import { IFilters } from './../interfaces/filters';
import { IRsTypes } from './../interfaces/ransack';


export interface IParams {
  quantity?: number;
  page?: number;
  filters?: IFilters;
}

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private _apiUrl = '/api/';
  private _booksEndpoint = 'books';
  private _authorsEndpoint = 'authors';

  constructor(private _http: HttpClient) { }

  public getList(quantity?: number, page?: number, filters?: IFilters): Observable<IBooks> {
    const params = this._getParams({ quantity, page, filters });

    return this._http.get<IBooks>(`${this._apiUrl}${this._booksEndpoint}`, { params });
  }
  public getById(value: number): Observable<IBook> {
    return this._http.get<IBook>(`${this._apiUrl}${this._booksEndpoint}/${value}`);
  }
  public getByTitle(value: string): Observable<IBooks> {
    return this._http.get<IBooks>(
      `${this._apiUrl}${this._booksEndpoint}?q[title_cont]=${value}`,
      );
  }
  public getByAuthor(id: number): Observable<IBooks> {
    return this._http.get<IBooks>(
      `${this._apiUrl}${this._authorsEndpoint}/${id}/${this._booksEndpoint}`,
      );
  }
  public create(book: IBook): Observable<IBook> {
    const url = `${this._apiUrl}${this._authorsEndpoint}/${book.author_id}/${this._booksEndpoint}`;

    return this._http.post<IBook>(url, book);
  }
  public update(book: IBook): Observable<IBook> {
    const url = `${this._apiUrl}${this._booksEndpoint}/${book.id}`;

    return this._http.put<IBook>(url, book);
  }
  public delete(id: number): Observable<IBook> {
    return this._http.delete<IBook>(`${this._apiUrl}${this._booksEndpoint}/${id}`);
  }

  private _getParams({ quantity, page, filters }: IParams): HttpParams {
    let params = new HttpParams();

    const instructions: IRsTypes = {
      genres: {
        matcher: RansackMethod.In,
        postfix: 'name',
      },
      minPrice: {
        matcher: RansackMethod.Gt,
        name: 'price',
      },
      maxPrice: {
        matcher: RansackMethod.Lt,
        name: 'price',
      },
      releaseFrom: {
        matcher: RansackMethod.Gt,
        name: 'release_date',
      },
      releaseTo: {
        matcher: RansackMethod.Lt,
        name: 'release_date',
      },
    };

    if (filters) {
      params = Ransack.toRansack(filters, instructions);
    }

    if (page) {
      params = params.append('page', `${page}`);
    }
    if (quantity) {
      params = params.append('limit', `${quantity}`);
    }

    return params;
  }

}
