import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book';

import { IPaginatorData } from './../../../layout/paginator/paginator.component';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  public loadingPage: boolean;
  public loadingBooks: boolean;

  public booksInQuantity: number = 0;
  public booksQuantity$: Observable<number>;
  public books$: Observable<IBook[]>;

  constructor(
    private booksService: BooksService,
    ) {
  }
  public ngOnInit(): void {
    this.loadingPage = true;
    this.booksQuantity$ = this.booksService.getBooksInQuantity(1)
        .pipe(map((data) => data.meta.records));

    setTimeout(() => {
      this.loadingPage = false;
    }, 1000);
  }
  public getFirstPageOfBooks(): void {
    this.getBooksInQuantity(10);
  }
  public changePageSize(pagData: IPaginatorData): void {
    this.getBooksInQuantity(pagData.pageSize, pagData.pageIndex);
  }
  public getBooksInQuantity(booksQuantity: number, page?: number): void {
    this.loadingBooks = true;
    this.books$ = this.booksService.getBooksInQuantity(booksQuantity, page += 1)
    .pipe(pluck('books'));

    setTimeout(() => {
      this.loadingBooks = false;
    }, 500);
  }

}

