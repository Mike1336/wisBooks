import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, ReplaySubject } from 'rxjs';
import { map, pluck, mergeMap, takeUntil } from 'rxjs/operators';

import { IBook } from '../../interfaces/book';
import { IFilters } from '../../interfaces/filters';
import { IGenre } from '../../interfaces/genre';

import { AuthorsService } from './../../../authors/services/authors.service';
import { IAuthor, IAuthors } from './../../interfaces/author';
import { BookEditModalComponent } from './../../components/book-edit-modal/book-edit-modal.component';
import { IGenres } from './../../interfaces/genre';
import { ConfirmingDeleteModalComponent } from './../../components/confirming-delete-modal/confirming-delete-modal.component';
import { BooksService } from './../../services/books.service';
import { IPaginatorData } from './../../../layout/interfaces/paginator-data';
import { GenresService } from './../../services/genres.service';

@Component({
  selector: 'books-container',
  templateUrl: './books.container.html',
  styleUrls: ['./books.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksContainer implements OnInit, OnDestroy {

  public emptyResult: boolean;

  public filters: IFilters;
  public booksQuantity: number = 0;
  public booksPageIndex: number = 0;
  public booksPageSize: number = 0;

  public books$: Observable<IBook[]>;

  public genres: IGenre[] = [];
  public authors: IAuthor[] = [];

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    public dialog: MatDialog,
    private _booksService: BooksService,
    private _genresService: GenresService,
    private _authorsService: AuthorsService,
    private _snackBar: MatSnackBar,
    private _cdRef: ChangeDetectorRef,
  ) {}

  public ngOnInit(): void {
    this.getAuthors();

    this.getGenres();

    this.getBooks();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  /**
   * Takes in a 3 parameters and getting books
   *
   * @param filters The optional parameter - data from filters form
   * @param booksQuantity The optional parameter for query with default value: 10
   * @param page The optional parameter for query with default value: 0 (first page)
   */
  public getBooks(filters?: IFilters, booksQuantity: number = 10, page: number = 0): void {
    this.books$ = this._booksService.getBooks(booksQuantity, page, filters).pipe(
      map((data) => {
        this.booksQuantity = data.meta.records;

        data.books.length > 0
          ? this.emptyResult = false
          : this.emptyResult = true;
        this.scrollToTop();

        return data.books;
      }),
    );
  }

  public getGenres(): void {
    this._genresService.getGenresInQuantity(1)
      .pipe(
        mergeMap((data: IGenres) => {
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
        mergeMap((data: IAuthors) => {
          return this._authorsService.getAuthorsInQuantity(data.meta.records);
        }),
        pluck('authors'),
        takeUntil(this._destroy$),
      )
      .subscribe((data: IAuthor[]) => {
        this.authors = data;
      });
  }

  public changePageSize(pagData: IPaginatorData): void {
    this.booksPageSize = pagData.pageSize;
    this.booksPageIndex = pagData.pageIndex + 1;

    this.getBooks(this.filters, pagData.pageSize, this.booksPageIndex);
  }

  public getFilteredBooks(filters: IFilters): void {
    this.filters = filters;
    this.getBooks(filters);
  }

  public resetFilters(): void {
    this.getBooks();
  }

  public showEditModal(book: IBook): void {
    const editModal = this.dialog.open(BookEditModalComponent, {
      data: {
        book,
        authors: this.authors,
        genres: this.genres,
      },
    });
    editModal.afterClosed()
      .pipe(
      mergeMap((bookData) => {
        if (bookData) {
          return this._booksService.updateBook(bookData);
        }
      }),
      takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this._cdRef.markForCheck();

        this.getBooks(this.filters, this.booksPageSize, this.booksPageIndex);
        this.openSnackBar('Book had been updated');
      });
  }

  public showDeleteModal(book: IBook): void {
    const deleteModal = this.dialog.open(ConfirmingDeleteModalComponent, {
      data: book,
    });
    deleteModal.afterClosed()
      .pipe(
      mergeMap((bookId) => {
        if (bookId) {
          return this._booksService.deleteBook(bookId);
        }
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result: IBook) => {
        this._cdRef.markForCheck();

        this.getBooks(this.filters, this.booksPageSize, this.booksPageIndex);
        this.openSnackBar(`Book with name '${result.title}' was successfully deleted.`);
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

}
