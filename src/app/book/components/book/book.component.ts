import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { IBook } from '../../../books/interfaces/book';
import { BooksService } from '../../../books/services/books.service';

@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {

  public bookId: number;
  public book: IBook;

  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    ) { }

  public ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.bookId = params.id;
      });
    this.booksService.getBookById(this.bookId)
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.book = data;
        console.log(this.book);
      },
      (err) => console.log('HTTP Error', err)
      );
  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
