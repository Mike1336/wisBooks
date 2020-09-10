import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs';

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
    if (page) {
      params = params.append('page', `${page}`);
    }
    if (quantity) {
      params = params.append('limit', `${quantity}`);
    }
    if (filters) {
      if (filters.genres.length > 0) {
        params = params.append('q[genres_name_cont]', `${filters.genres[0]}`);
      }
      if (filters.minPrice) {
        params = params.append('q[price_gteq]', `${filters.minPrice}`);
      }
      if (filters.maxPrice) {
        params = params.append('q[price_lteq]', `${filters.maxPrice}`);
      }
      if (filters.releaseFrom) {
        params = params.append('q[release_date_gteq]', `${filters.releaseFrom}`);
      }
      if (filters.releaseTo) {
        params = params.append('q[release_date_lteq]', `${filters.releaseTo}`);
      }
    }

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
