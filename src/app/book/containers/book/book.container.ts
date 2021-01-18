import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
  OnChanges,
} from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, of, ReplaySubject } from 'rxjs';
import { switchMap, takeUntil } from 'rxjs/operators';

import { Select, Store } from '@ngxs/store';

import { Delete, Update } from '../../../store/actions/common.actions';

import { GetAllAuthors } from './../../../store/actions/authors.actions';
import { GetAllGenres } from './../../../store/actions/genres.actions';
import { GetBookById } from './../../../store/actions/books.actions';
import { ConfirmingDeleteModalComponent } from './../../../books/components/confirming-delete-modal/confirming-delete-modal.component';
import { IAuthors, IAuthor } from './../../../authors/interfaces/author';
import { IGenres, IGenre } from './../../../books/interfaces/genre';
import { BookEditModalComponent } from './../../../books/components/book-edit-modal/book-edit-modal.component';
import { AuthService } from './../../../auth/services/auth.service';
import { IBook } from './../../../books/interfaces/book';

@Component({
  selector: 'book-container',
  templateUrl: './book.container.html',
  styleUrls: ['./book.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookContainer implements OnInit, OnChanges, OnDestroy {

  @Input()
  public id: number;

  @Output()
  public contentNotFound = new EventEmitter<Error>();

  @Select((state) => state.books.item)
  public book$: Observable<IBook>;

  @Select((state) => state.authors.list)
  public authors$: Observable<IAuthors>;

  @Select((state) => state.genres.list)
  public genres$: Observable<IGenres>;

  public authors: IAuthor[];

  public genres: IGenre[];

  private _destroy$ = new ReplaySubject<number>(1);

  constructor(
    private _auth: AuthService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _store: Store,
  ) { }

  public get isAuth(): boolean {
    return this._auth.isAuth();
  }

  public ngOnInit(): void {
    this._getGenres();

    this._getAuthors();
  }

  public ngOnChanges(): void {
    this._getBook();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public showEditModal(book: IBook): void {
    const editModal = this._dialog.open(BookEditModalComponent, {
      data: {
        book,
        authors: this.authors,
        genres: this.genres,
      },
    });
    editModal.afterClosed()
      .pipe(
      switchMap((editableBook) => {
        if (editableBook) {
          return this._store.dispatch(new Update<IBook>(editableBook));
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result) => {
        if (!result) {
          this._openSnackBar('Something goes wrong...');
        }
        this._openSnackBar('Book was updated');
      });
  }

  public showDeleteModal(book: IBook): void {
    const deleteModal = this._dialog.open(ConfirmingDeleteModalComponent, {
      data: book,
    });
    deleteModal.afterClosed()
      .pipe(
      switchMap((deletableBook: IBook) => {
        if (deletableBook) {
          return this._store.dispatch(new Delete(book.id));
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result: IBook) => {
        if (!result) {
          this._openSnackBar('Something goes wrong...');
        }
        this._openSnackBar(`Book '${result.title}' was successfully deleted.`);
      });
  }

  private _getBook(): void {
    this._store.dispatch(new GetBookById(this.id));
  }

  private _getAuthors(): void {
    this._store.dispatch(new GetAllAuthors());

    this.authors$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        (data: IAuthors) => {
          if (!data) {
            return;
          }
          this.authors = data.authors;
        });
  }

  private _getGenres(): void {
    this._store.dispatch(new GetAllGenres());

    this.genres$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        (data: IGenres) => {
          if (!data) {
            return;
          }
          this.genres = data.genres;
        });
  }

  private _openSnackBar(message: string): void {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

}

