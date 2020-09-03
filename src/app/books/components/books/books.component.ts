import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { IBook, IBooks } from '../../interfaces/book';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {

  public books: IBook[];
  public bookPageQuantity: number = 0;

  public books$: Observable<IBooks>;

  public displayedColumns: string[] = ['#', 'title', 'price', 'genres'];

  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    ) {
  }
  public ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.books$ = this.booksService.getBooksInPage(params.number);
      });
    this.books$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.books = data.books;
        this.bookPageQuantity = data.meta.pages;
      });
  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}

