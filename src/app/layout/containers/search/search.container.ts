import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable, of, ReplaySubject } from 'rxjs';
import { map, debounceTime, takeUntil, tap, switchMap } from 'rxjs/operators';

import { BooksService } from './../../../books/services/books.service';
import { IBooks, IBook } from './../../../books/interfaces/book';


@Component({
  selector: 'search-container',
  templateUrl: './search.container.html',
  styleUrls: ['./search.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchContainer implements OnInit, OnDestroy {

  public loading: boolean;
  public emptyResult: boolean;

  public searchForm: FormGroup;

  public foundBooks$: Observable<IBooks | IBook[]>;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _booksService: BooksService) {}

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchField: new FormControl(''),
    });
    this.foundBooks$ = this.searchForm.get('searchField').valueChanges
      .pipe(
        tap(() => this.loading = true),
        debounceTime(500),
        switchMap((fieldData) => {
          if (!fieldData) {
            return of([]);
          }

          return this.findBooks(fieldData);
        }),
        tap(() => this.loading = false),
        takeUntil(this._destroy$),
      );
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public findBooks(bookName: string): Observable<IBook[]> {
    return this._booksService
      .getBooksByTItle(bookName)
      .pipe(
        map((data) => {
          data.books.length === 0
          ? this.emptyResult = true
          : this.emptyResult = false;

          return data.books;
        }),
      );
  }

}
