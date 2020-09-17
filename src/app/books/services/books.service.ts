import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Ransack, RansackMethod } from './../ransack/ransack';
import { IBook, IBooks } from './../interfaces/book';
import { IFilters } from './../interfaces/filters';


@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private apiUrl = 'http://muzhikov.kubesh.ru/api/';
  private booksEndpoint = 'books';
  private authorsEndpoint = 'authors';

  constructor(private http: HttpClient) { }

  public getBooks(quantity?: number, page?: number, filters?: IFilters): Observable<IBooks> {
    let params = new HttpParams();
    if (filters) {
      params = Ransack.toRansack(filters, {
        genres: RansackMethod.In,
        prices: {
          price_gt: RansackMethod.Gt,
          price_lt: RansackMethod.Lt,
        },
        releases: {
          release_date_gt: RansackMethod.Gt,
          release_date_lt: RansackMethod.Lt,
        },
      });
    }

    if (page) {
      params = params.append('page', `${page}`);
    }
    if (quantity) {
      params = params.append('limit', `${quantity}`);
    }
    console.log(params)
    return this.http.get<IBooks>(`${this.apiUrl}${this.booksEndpoint}`, { params });
  }
  public getBookById(bookId: number): Observable<IBook> {
    return this.http.get<IBook>(`${this.apiUrl}${this.booksEndpoint}/${bookId}`);
  }
  public getBookByAuthor(authorId: number): Observable<object> {
    return this.http.get(`${this.apiUrl}${this.authorsEndpoint}/${authorId}/${this.booksEndpoint}`);
  }
  public createBook(book: IBook): Observable<object> {
    const url = `${this.apiUrl}${this.authorsEndpoint}/${book.author_id}/${this.booksEndpoint}`;

    return this.http.post<IBook>(url, book);
  }
  public updateBook(book: IBook): Observable<object> {
    const url = `${this.apiUrl}${this.booksEndpoint}/${book.id}`;

    return this.http.put<IBook>(url, book);
  }
  public deleteBook(bookId: number): Observable<object> {
    return this.http.delete<IBook>(`${this.apiUrl}${this.booksEndpoint}/${bookId}`);
  }

}
