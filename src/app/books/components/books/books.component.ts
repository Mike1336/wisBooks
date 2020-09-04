import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil, map, toArray } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { IBook, IBooks } from '../../interfaces/book';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {

  public books: IBook[];
  public booksInQuantity: number = 0;

  public books$: Observable<any>;
  public loadingPage: boolean;
  public loadingBooks: boolean;

  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private booksService: BooksService,
    private cdr: ChangeDetectorRef,
    ) {
  }
  public ngOnInit(): void {
  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  public takePaginator(paginator: MatPaginator): void {
    this.booksInQuantity = paginator.pageSize;
    this.hideWrongBooks(this.booksInQuantity);
  }
  public changePageSize(newSize: number): void {
    this.booksInQuantity = newSize;
    this.hideWrongBooks(this.booksInQuantity);
  }
  public hideWrongBooks(booksQuantity: number): void {
    this.books$ = this.booksService.getBooksInQuantity(booksQuantity);
    this.books$
      .pipe(takeUntil(this.destroy$))
      .subscribe((books) => {
        this.books = books.books;
        this.loadingBooks = false;
      });
      this.cdr.detectChanges();
  }
}

