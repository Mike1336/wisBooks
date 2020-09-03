import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { IBook, IBooks } from '../../interfaces/book';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {

  public title: string = 'My books (1/10 pages)';

  public books: IBook[];
  public bookPageQuantity: number = 0;

  public books$: Observable<IBooks>;
  public booksQuantity$: Observable<IBooks>;

  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private booksService: BooksService,
    // private route: ActivatedRoute,
    ) {
  }
  public ngOnInit(): void {
    // this.route.params
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((params) => {
    //     this.books$ = this.booksService.get(params.number);
    //   });
    // this.books$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data) => {
    //     this.books = data.books;
    //     this.bookPageQuantity = data.meta.pages;
    //   });
    this.booksQuantity$ = this.booksService.getBooksInFirstPage();
    this.booksQuantity$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.books$ = this.booksService.getBooksInQuantity(data.meta.records);
        this.books$
          .pipe(takeUntil(this.destroy$))
          .subscribe((books) => {
            this.books = books.books;
          });
      });
  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}

