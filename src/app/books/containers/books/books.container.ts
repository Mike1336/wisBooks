import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, of, ReplaySubject } from 'rxjs';
import { map, pluck, takeUntil, switchMap } from 'rxjs/operators';

import { Select, Store } from '@ngxs/store';

import { GetBooks } from '../../../store/actions/books.actions';
import { IBook, IBooks } from '../../interfaces/book';
import { IFilters } from '../../interfaces/filters';
import { IGenre } from '../../interfaces/genre';
import { GetAllAuthors } from '../../../store/actions/authors.actions';
import { GetAllGenres } from '../../../store/actions/genres.actions';

import { Delete, Update, Create } from './../../../store/actions/common.actions';
import { BookCreateModalComponent } from './../../components/book-create-modal/book-create-modal.component';
import { IAuthor, IAuthors } from './../../interfaces/author';
import { BookEditModalComponent } from './../../components/book-edit-modal/book-edit-modal.component';
import { IGenres } from './../../interfaces/genre';
import { ConfirmingDeleteModalComponent } from './../../components/confirming-delete-modal/confirming-delete-modal.component';
import { IPaginatorData } from './../../../layout/interfaces/paginator-data';
import { AuthService } from './../../../auth/services/auth.service';
import { SidebarService } from './../../../layout/services/sidebar.service';

@Component({
  selector: 'books-container',
  templateUrl: './books.container.html',
  styleUrls: ['./books.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksContainer implements OnInit, OnDestroy {

  @Input()
  public pageFromParam: string;

  public emptyResult: boolean;
  public isAuth: boolean;
  public filters: IFilters;
  public booksQuantity: number = 0;
  public booksPageIndex: number = 0;
  public booksPageSize: number = 0;

  @Select((state) => state.books.list)
  public response$: Observable<IBooks>;

  @Select((state) => state.authors.list)
  public authors$: Observable<IAuthors>;

  @Select((state) => state.genres.list)
  public genres$: Observable<IGenres>;


  public books$: Observable<IBook[]>;

  public genres: IGenre[] = [];
  public authors: IAuthor[] = [];

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    public auth: AuthService,
    private _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _cdRef: ChangeDetectorRef,
    private _sbService: SidebarService,
    private _router: Router,
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.booksPageIndex = +this.pageFromParam - 1;

    this.isAuth = this.auth.isAuth();

    this._listenBooks();

    this._getAuthors();

    this._getGenres();

    this._getBooks(null, null, this.booksPageIndex);
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }


  public changePageSize(pagData: IPaginatorData): void {
    this._router.navigate([`/books/${pagData.pageIndex + 1}`]);
    this.booksPageSize = pagData.pageSize;
    this.booksPageIndex = pagData.pageIndex;

    this._getBooks(this.filters, pagData.pageSize, this.booksPageIndex);
  }

  public getFilteredBooks(filters: IFilters): void {
    this.filters = filters;
    this._getBooks(filters);
  }

  public resetFilters(): void {
    this._getBooks();
  }

  public showCreateModal(): void {
    const createModal = this._dialog.open(BookCreateModalComponent, {
      data: {
        authors: this.authors,
        genres: this.genres,
      },
    });
    createModal.afterClosed()
      .pipe(
      switchMap((book) => {
        if (book) {
          return this._store.dispatch(new Create<IBook>(book));
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result) => {
        if (result) {
          this._cdRef.markForCheck();

          this._getBooks(this.filters, this.booksPageSize, this.booksPageIndex);
          this.openSnackBar('Book had been created');
        }
      });
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
      switchMap((editedBook) => {
        if (editedBook) {
          return this._store.dispatch(new Update<IBook>(editedBook));
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result) => {
        if (result) {
          this._cdRef.markForCheck();

          this._getBooks(this.filters, this.booksPageSize, this.booksPageIndex);
          this.openSnackBar('Book had been updated');
        }
      });
  }

  public showDeleteModal(book: IBook): void {
    const deleteModal = this._dialog.open(ConfirmingDeleteModalComponent, {
      data: book,
    });
    deleteModal.afterClosed()
      .pipe(
      switchMap((id) => {
        if (id) {
          return this._store.dispatch(new Delete(id));
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result: IBook) => {
        if (result) {
          this._cdRef.markForCheck();

          this._getBooks(this.filters, this.booksPageSize, this.booksPageIndex);
          this.openSnackBar(`Book with name '${result.title}' was successfully deleted.`);
        }
      });
  }

  public openSnackBar(message: string): void {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

  public scrollToTop(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

  public openFilters(): void {
    this._sbService.changeFilSb(true);
  }

  private _listenBooks(): void {
    this.books$ = this.response$.pipe(
      map((data) => {
        if (!data) {
          return;
        }

        this.booksQuantity = data.meta.records;

        data.books.length > 0
          ? this.emptyResult = false
          : this.emptyResult = true;
        this.scrollToTop();

        return data.books;
      }),
    );
  }

  /**
 * Takes in a 3 parameters and getting books
 *
 * @param filters The optional parameter - data from filters form
 * @param booksQuantity The optional parameter for query with default value: 10
 * @param page The optional parameter for query with default value: 0 (first page)
 */
  private _getBooks(filters?: IFilters, booksQuantity: number = 10, page: number = 0): void {
    this._store.dispatch(new GetBooks(filters, booksQuantity, page));
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


}
