import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil, mergeMap, map } from 'rxjs/operators';

import { IBook } from '../../../books/interfaces/book';
import { BooksService } from '../../../books/services/books.service';

@Component({
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit, OnDestroy {

  public loadingPage: boolean;
  public book: IBook;

  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private booksService: BooksService,
    private route: ActivatedRoute,
    private router: Router,
    ) { }

  public ngOnInit(): void {
    this.loadingPage = true;

    this.getBook()
      .pipe(
      takeUntil(this.destroy$),
      )
      .subscribe(
        (data) => {
          this.book = data;
          this.loadingPage = false;
        },
        (err) => {
          this.router.navigate(['/404'], { skipLocationChange: true });
        });
  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  /**
   * Returns an Observable with book data
   */
  public getBook(): Observable<IBook> {
    return this.route.params
      .pipe(
          map((params) => {
            return params.id;
          }),
          mergeMap((id: number): Observable<IBook> => {
            return this.booksService.getBookById(id);
          }),
      );
  }

}
