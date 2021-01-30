import { Component, OnInit, Input, Output, EventEmitter, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';

import { Observable, of, ReplaySubject } from 'rxjs';
import { catchError, pluck, shareReplay, switchMap, takeUntil } from 'rxjs/operators';

import { ConfirmingDeleteModalComponent } from '../../../books/components/confirming-delete-modal/confirming-delete-modal.component';
import { IAuthors, IAuthor } from '../../../authors/interfaces/author';
import { IGenres, IGenre } from '../../../books/interfaces/genre';
import { GenresService } from '../../../books/services/genres.service';
import { AuthorsService } from '../../../authors/services/authors.service';
import { BookEditModalComponent } from '../../../books/components/book-edit-modal/book-edit-modal.component';
import { AuthService } from '../../../auth/services/auth.service';
import { IBook } from '../../../books/interfaces/book';
import { BooksService } from '../../../books/services/books.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'book-container',
  templateUrl: './book.container.html',
  styleUrls: ['./book.container.scss'],
  animations: [
    trigger('bookTransitions', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('250ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('250ms', style({ opacity: 0 }))
      ])
    ])
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookContainer implements OnInit, OnDestroy {

  public isAuth: boolean;

  public book: IBook;

  public authors: IAuthor[];

  public genres: IGenre[];

  @Input()
  public paramsStream$: Observable<number>;

  @Output()
  public contentNotFound = new EventEmitter<Error>();

  private _destroy$ = new ReplaySubject<number>(1);

  constructor(
    private _booksService: BooksService,
    private _genresService: GenresService,
    private _authorsService: AuthorsService,
    private _auth: AuthService,
    private _dialog: MatDialog,
    private _router: Router,
    private _snackBar: MatSnackBar,
    ) { }

  public ngOnInit(): void {
    this.isAuth = this._auth.isAuth();

    this.getBookFromUrl();

    this.getGenres();

    this.getAuthors();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public showEditModal(): void {
    const editModal = this._dialog.open(BookEditModalComponent, {
      data: {
        book: this.book,
        authors: this.authors,
        genres: this.genres,
      },
    });
    editModal.afterClosed()
      .pipe(
      switchMap((bookData) => {
        if (bookData) {
          return this._booksService.updateBook(bookData);
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result) => {
        if (result) {
          this.getBookFromUrl();

          this.openSnackBar('Book had been updated');
        }
      });
  }

  public showDeleteModal(): void {
    const deleteModal = this._dialog.open(ConfirmingDeleteModalComponent, {
      data: this.book,
    });
    deleteModal.afterClosed()
      .pipe(
      switchMap((bookId) => {
        if (bookId) {
          return this._booksService.deleteBook(bookId);
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result: IBook) => {
        if (result) {
          this.openSnackBar(`Book: "${result.title}" was successfully deleted`);

          this._router.navigate(['/books/1']);
        }
      });
  }
  public getBookFromUrl(): void {
    this.paramsStream$
      .pipe(
        switchMap((id) => {
          return this._booksService.getBookById(id).pipe(
            shareReplay(1),
            catchError((err) => {
              this.contentNotFound.emit(err);
              throw new Error(`error in source. Details: ${err}`);
            }),
            takeUntil(this._destroy$),
          );
        }),
        takeUntil(this._destroy$),
      )
      .subscribe(
        (book: IBook) => {
          this.book = book;
        },
      );
  }

  public getGenres(): void {
    this._genresService.getGenresInQuantity(1)
      .pipe(
        switchMap((data: IGenres) => {
          return this._genresService.getGenresInQuantity(data.meta.records);
        }),
        pluck('genres'),
        takeUntil(this._destroy$),
      ).subscribe((data: IGenre[]) => {
        this.genres = data;
      });
  }

  public getAuthors(): void {
    this._authorsService.getAuthorsInQuantity(1)
      .pipe(
        switchMap((data: IAuthors) => {
          return this._authorsService.getAuthorsInQuantity(data.meta.records);
        }),
        pluck('authors'),
        takeUntil(this._destroy$),
      )
      .subscribe((data: IAuthor[]) => {
        this.authors = data;
      });
  }

  public openSnackBar(message: string): void {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

}
