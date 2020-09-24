import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { catchError, takeUntil } from 'rxjs/operators';

import { BookView } from './../../views/book/book.view';
import { IBook } from './../../../books/interfaces/book';
import { BooksService } from './../../../books/services/books.service';

@Component({
  selector: 'book-container',
  templateUrl: './book.container.html',
  styleUrls: ['./book.container.scss'],
})
export class BookContainer implements OnInit, OnDestroy {

  public book$: Observable<IBook>;

  @Input()
  public paramsStream$: Observable<number>;

  @Output()
  public contentNotFound: EventEmitter<Error> = new EventEmitter();

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private booksService: BooksService, private bookView: BookView) { }

  public ngOnInit(): void {
    this.paramsStream$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        (id) => {
          this.book$ = this.booksService.getBookById(id).pipe(
            catchError((err) => {
              this.contentNotFound.emit(err);
              throw new Error(`error in source. Details: ${err}`);
            }),
          );
        },
      );
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }


}
