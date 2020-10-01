import { ChangeDetectionStrategy, Component, OnInit, OnDestroy } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

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
  public booksIndex: number = 0;

  public books$: Observable<IBook[]>;
  public genres$: Observable<IGenre[]>;

  public genres: IGenre[] = [];
  public authors: IAuthor[] = [];

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    private _booksService: BooksService,
    private _genresService: GenresService,
    private _authorsService: AuthorsService,
    public dialog: MatDialog,
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
    this.getBooks(this.filters, pagData.pageSize, pagData.pageIndex);
  }

  public getFilteredBooks(filters: IFilters): void {
    this.filters = filters;
    this.getBooks(filters);
  }

  public resetFilters(): void {
    this.getBooks();
  }

  public showEditModal(book: IBook): void {
    const deleteModal = this.dialog.open(BookEditModalComponent, {
      data: {
        book,
        authors: this.authors,
        genres: this.genres,
      },
    });
    deleteModal.afterClosed()
      .pipe(
      // mergeMap((bookData) => {
      //   if (bookData) {
      //     return this._booksService.updateBook(bookData);
      //   }
      // }),
      // takeUntil(this._destroy$),
      )
      .subscribe((result) => {
        console.log(result);
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
      .subscribe((result) => {
        console.log(result);
      });
  }

}
