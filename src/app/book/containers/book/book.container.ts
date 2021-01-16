import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnChanges
} from '@angular/core';
import { Router } from '@angular/router';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { of, ReplaySubject } from 'rxjs';
import { pluck, switchMap, takeUntil } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { fromBook } from '../../../store';

import { IBooksState } from './../../../store/reducers/book.reducer';
import { ConfirmingDeleteModalComponent } from './../../../books/components/confirming-delete-modal/confirming-delete-modal.component';
import { IAuthors, IAuthor } from './../../../authors/interfaces/author';
import { IGenres, IGenre } from './../../../books/interfaces/genre';
import { GenresService } from './../../../books/services/genres.service';
import { AuthorsService } from './../../../authors/services/authors.service';
import { BookEditModalComponent } from './../../../books/components/book-edit-modal/book-edit-modal.component';
import { AuthService } from './../../../auth/services/auth.service';
import { IBook, IBooks } from './../../../books/interfaces/book';
import { BooksService } from './../../../books/services/books.service';

@Component({
  selector: 'book-container',
  templateUrl: './book.container.html',
  styleUrls: ['./book.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookContainer implements OnInit, OnChanges, OnDestroy {

  public isAuth: boolean;

  public book: IBook;

  public authors: IAuthor[];

  public genres: IGenre[];

  @Input()
  public id: number;

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
    private _cdRef: ChangeDetectorRef,
    private _store: Store<{ bookState: IBooksState }>,
    ) { }

  public ngOnInit(): void {
    this.isAuth = this._auth.isAuth();

    this._listenData();

    this.getBook();

    this.getGenres();

    this.getAuthors();
  }

  public ngOnChanges(): void {
    this.getBook();
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
          this.getBook();

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
  public getBook(): void {
    this._store.dispatch(
      fromBook.GetBookById({ id: this.id }),
    );
  }

  public getGenres(): void {
    this._genresService.getInQuantity(1)
      .pipe(
        switchMap((data: IGenres) => {
          return this._genresService.getInQuantity(data.meta.records);
        }),
        pluck('genres'),
        takeUntil(this._destroy$),
      ).subscribe((data: IGenre[]) => {
        this.genres = data;
      });
  }

  public getAuthors(): void {
    this._authorsService.getInQuantity(1)
      .pipe(
        switchMap((data: IAuthors) => {
          return this._authorsService.getInQuantity(data.meta.records);
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

  private _listenData(): void {
    this._store.select(fromBook.getShownBook)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe({
        next: (book: IBook) => {
          if (!book) {
            return;
          }
          this.book = book;
          this._cdRef.markForCheck();
        },
      });
  }

}
