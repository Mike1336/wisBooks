import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Ransack, RansackMethod } from './../ransack/ransack';
import { IBook, IBooks } from './../interfaces/book';
import { IFilters } from './../interfaces/filters';
import { IRsTypes } from './../interfaces/ransack';


@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private _apiUrl = 'http://muzhikov.kubesh.ru/api/';
  private _booksEndpoint = 'books';
  private _authorsEndpoint = 'authors';

  constructor(private _http: HttpClient) { }

  public getBooks(quantity?: number, page?: number, filters?: IFilters): Observable<IBooks> {

    let params = new HttpParams();

    const instructions: IRsTypes = {
      genres: {
        matcher: RansackMethod.In,
        postfix: 'name',
      },
      prices: [
        {
          matcher: RansackMethod.Gt,
          name: 'price',
          from: 'minPrice',
        },
        {
          matcher: RansackMethod.Lt,
          name: 'price',
          from: 'maxPrice',
        },
      ],
      releases: [
        {
          matcher: RansackMethod.Gt,
          name: 'release_date',
          from: 'releaseDateFrom',
        },
        {
          matcher: RansackMethod.Lt,
          name: 'release_date',
          from: 'releaseDateTo',
        },
      ],
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

    return this._http.get<IBooks>(`${this._apiUrl}${this._booksEndpoint}`, { params });
  }
  public getBookById(bookId: number): Observable<IBook> {
    return this._http.get<IBook>(`${this._apiUrl}${this._booksEndpoint}/${bookId}`);
  }
  public getBooksByTItle(bookTitle: string): Observable<IBooks> {
    return this._http.get<IBooks>(
      `${this._apiUrl}${this._booksEndpoint}?q[title_cont]=${bookTitle}`,
      );
  }
  public getBookByAuthor(authorId: number): Observable<object> {
    return this._http.get(
      `${this._apiUrl}${this._authorsEndpoint}/${authorId}/${this._booksEndpoint}`,
      );
  }
  public createBook(book: IBook): Observable<object> {
    const url = `${this._apiUrl}${this._authorsEndpoint}/${book.author_id}/${this._booksEndpoint}`;

    return this._http.post<IBook>(url, book);
  }
  public updateBook(book: IBook): Observable<object> {
    const url = `${this._apiUrl}${this._booksEndpoint}/${book.id}`;

    return this._http.put<IBook>(url, book);
  }
  public deleteBook(bookId: number): Observable<object> {
    return this._http.delete<IBook>(`${this._apiUrl}${this._booksEndpoint}/${bookId}`);
  }

}
