import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { of, ReplaySubject } from 'rxjs';
import { pluck, takeUntil, switchMap } from 'rxjs/operators';

import { Store } from '@ngrx/store';

import { IBook } from '../../interfaces/book';
import { IFilters } from '../../interfaces/filters';
import { IGenre } from '../../interfaces/genre';
import { fromAuthor, fromBook, fromGenre } from '../../../store';

import { IBooks } from './../../interfaces/book';
import { BookCreateModalComponent } from './../../components/book-create-modal/book-create-modal.component';
import { IAuthor } from './../../interfaces/author';
import { BookEditModalComponent } from './../../components/book-edit-modal/book-edit-modal.component';
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
  public booksQuantity: number = 10;
  public booksPageIndex: number = 0;
  public booksPageSize: number = 5;

  public books: IBook[];

  public genres: IGenre[] = [];
  public authors: IAuthor[] = [];

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    public dialog: MatDialog,
    public auth: AuthService,
    private _snackBar: MatSnackBar,
    private _cdRef: ChangeDetectorRef,
    private _sbService: SidebarService,
    private _router: Router,
    private _store: Store,
  ) {}

  public ngOnInit(): void {
    this.booksPageIndex = +this.pageFromParam - 1;

    this.isAuth = this.auth.isAuth();

    this._listenData();

    this.getAuthors();

    this.getGenres();

    this.getBooks(null, null, this.booksPageIndex);
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  /**
   * Takes in a 3 parameters and getting books
   *
   * @param filters The optional parameter - data from filters form
   * @param quantity The optional parameter for query with default value: 10
   * @param page The optional parameter for query with default value: 0 (first page)
   */
  public getBooks(filters?: IFilters, quantity?: number, page?: number): void {
    this._store.dispatch(
      fromBook.GetBooks(
        {
          page: page || this.booksPageIndex,
          quantity: quantity || this.booksPageSize,
          filters: filters || this.filters,
        }),
      );
  }

  public getGenres(): void {
    this._store.dispatch(fromGenre.GetGenres({ quantity: 1 }));

    this._store.select(fromGenre.getGenresList)
      .pipe(
      switchMap((data) => {
        if (!data) {
          return of(false);
        }
        const { meta: { records, limit } } = data;

        if (records !== limit) {
          this._store.dispatch(fromGenre.GetGenres({ quantity: records }));
        }

        return this._store.select(fromGenre.getGenresList);
      }),
      pluck('genres'),
      takeUntil(this._destroy$),
    )
      .subscribe((data: IGenre[]) => {
        this.genres = data;
      });
  }

  public getAuthors(): void {
    this._store.dispatch(fromAuthor.GetAuthors({ quantity: 1 }));

    this._store.select(fromAuthor.getAuthorsList)
      .pipe(
      switchMap((data) => {
        if (!data) {
          return of(false);
        }
        const { meta: { records, limit } } = data;

        if (records !== limit) {
          this._store.dispatch(fromAuthor.GetAuthors({ quantity: records }));
        }

        return this._store.select(fromAuthor.getAuthorsList);
      }),
      pluck('authors'),
      takeUntil(this._destroy$),
    )
      .subscribe((data: IAuthor[]) => {
        this.authors = data;
      });
  }

  public changePageSize(pagData: IPaginatorData): void {
    this._router.navigate([`/books/${pagData.pageIndex + 1}`]);
    this.booksPageSize = pagData.pageSize;
    this.booksPageIndex = pagData.pageIndex;

    this.getBooks(this.filters, pagData.pageSize, this.booksPageIndex);
  }

  public getFilteredBooks(filters: IFilters): void {
    this.filters = filters;
    this.getBooks(filters);
  }

  public resetFilters(): void {
    this.getBooks();
  }

  public showCreateModal(): void {
    const createModal = this.dialog.open(BookCreateModalComponent, {
      data: {
        authors: this.authors,
        genres: this.genres,
      },
    });
    createModal.afterClosed()
      .pipe(
      switchMap((book) => {
        if (book) {
          this._store.dispatch(fromBook.CreateBook({ book }));

          return this._store.select(fromBook.getUpdatedBook);
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((res: IBook) => {
        this.getBooks();

        this._cdRef.markForCheck();

        this._openSnackBar(`Book ${res.title} was created`);
      });
  }

  public showEditModal(bookForEdit: IBook): void {
    const editModal = this.dialog.open(BookEditModalComponent, {
      data: {
        book: bookForEdit,
        authors: this.authors,
        genres: this.genres,
      },
    });
    editModal.afterClosed()
      .pipe(
        switchMap((book) => {
          if (!book) {
            return of(false);
          }
          this._store.dispatch(fromBook.UpdateBook({ book }));

          return this._store.select(fromBook.getUpdatedBook);
        }),
        takeUntil(this._destroy$),
      )
      .subscribe((res: IBook) => {
        if (!res) {
          return;
        }
        this.getBooks();

        this._cdRef.markForCheck();

        this._openSnackBar(`Book ${res.title} was updated`);
      });
  }

  public showDeleteModal(book: IBook): void {
    const deleteModal = this.dialog.open(ConfirmingDeleteModalComponent, {
      data: book,
    });
    deleteModal.afterClosed()
      .pipe(
      switchMap((deletedBook: IBook) => {
        if (!deletedBook) {
          return of(false);
        }
        this._store.dispatch(fromBook.DeleteBook({ id: deletedBook.id }));

        return this._store.select(fromBook.getUpdatedBook);
      }),
      takeUntil(this._destroy$),
    )
      .subscribe((res: IBook) => {
        if (!res) {
          return;
        }
        this.getBooks();

        this._cdRef.markForCheck();

        this._openSnackBar(`Book ${res.title} was deleted`);
      });
  }

  public openFilters(): void {
    this._sbService.changeFilSb(true);
  }

  private _listenData(): void {
    this._store.select(fromBook.getBookList).pipe(
      takeUntil(this._destroy$),
    )
      .subscribe((data: IBooks) => {
        if (!data) {
          return;
        }
        const { books, meta } = data;

        this.books = books;
        this.booksQuantity = meta.records;

        books.length > 0
          ? this.emptyResult = false
          : this.emptyResult = true;

        this._cdRef.markForCheck();
        this._scrollToTop();
      });
  }

  private _openSnackBar(message: string): void {
    this._snackBar.open(message, 'OK', {
      duration: 2000,
    });
  }

  private _scrollToTop(): void {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  }

}
