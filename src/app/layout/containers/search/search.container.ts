import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Observable, ReplaySubject } from 'rxjs';
import { map, debounceTime, takeUntil } from 'rxjs/operators';

import { BooksService } from './../../../books/services/books.service';
import { IBooks, IBook } from './../../../books/interfaces/book';


@Component({
  selector: 'search-container',
  templateUrl: './search.container.html',
  styleUrls: ['./search.container.scss']
})
export class SearchContainer implements OnInit, OnDestroy {

  public emptyResult: boolean;

  public searchForm: FormGroup;

  public foundBooks$: Observable<IBooks | IBook[]>;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _booksService: BooksService, private _cdRef: ChangeDetectorRef) {}

  public ngOnInit(): void {
    this.searchForm = new FormGroup({
      searchField: new FormControl(''),
    });
    this.searchForm.get('searchField').valueChanges
      .pipe(
        map((word) => {
          if (word) {
            return word.toLowerCase();
          }

          return word;
        }),
        debounceTime(500),
        takeUntil(this._destroy$),
      )
      .subscribe(
        (fieldString) => {
          this.findBooks(fieldString);

          this._cdRef.markForCheck();
        });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public findBooks(searchString: string): void {
    this.foundBooks$ = this._booksService
      .getBooksByTItle(searchString)
      .pipe(
        map((data) => {
          data.books.length === 0
          ? this.emptyResult = true
          : this.emptyResult = false;

          this._cdRef.markForCheck();

          return data.books;
        }));
  }

}
