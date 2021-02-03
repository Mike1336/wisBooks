import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, OnDestroy, ChangeDetectorRef, Input } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { Observable, of, ReplaySubject } from 'rxjs';
import { map, pluck, takeUntil, switchMap } from 'rxjs/operators';

import { IBook } from '../../interfaces/book';
import { IFilters } from '../../interfaces/filters';
import { IGenre } from '../../interfaces/genre';

import { BookCreateModalComponent } from '../../components/book-create-modal/book-create-modal.component';
import { AuthorsService } from '../../../authors/services/authors.service';
import { IAuthor, IAuthors } from '../../interfaces/author';
import { BookEditModalComponent } from '../../components/book-edit-modal/book-edit-modal.component';
import { IGenres } from '../../interfaces/genre';
import { ConfirmingDeleteModalComponent } from '../../components/confirming-delete-modal/confirming-delete-modal.component';
import { BooksService } from '../../services/books.service';
import { IPaginatorData } from '../../../layout/interfaces/paginator-data';
import { GenresService } from '../../services/genres.service';
import { AuthService } from '../../../auth/services/auth.service';
import { SidebarService } from '../../../layout/services/sidebar.service';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'books-container',
  templateUrl: './books.container.html',
  styleUrls: ['./books.container.scss'],
  animations: [
    trigger('pageTransitions', [
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
export class BooksContainer implements OnInit, OnDestroy {

  @Input()
  public pageFromParam: string;

  public emptyResult: boolean;
  public isAuth: boolean;
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
    public auth: AuthService,
    private _booksService: BooksService,
    private _genresService: GenresService,
    private _authorsService: AuthorsService,
    private _snackBar: MatSnackBar,
    private _cdRef: ChangeDetectorRef,
    private _sbService: SidebarService,
    private _router: Router,
  ) {}

  public ngOnInit(): void {
    this.booksPageIndex = +this.pageFromParam - 1;

    this.isAuth = this.auth.isAuth();

    this.getAuthors();

    this.getGenres();

    this.getBooks(null, null, this.booksPageIndex);
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

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
      switchMap((bookData) => {
        if (bookData) {
          return this._booksService.createBook(bookData);
        }

        return of(false);
      }),
      takeUntil(this._destroy$),
      )
      .subscribe((result) => {
        if (result) {
          this._cdRef.markForCheck();

          this.getBooks(this.filters, this.booksPageSize, this.booksPageIndex);
          this.openSnackBar('Book had been created');
        }
      });
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
          this._cdRef.markForCheck();

          this.getBooks(this.filters, this.booksPageSize, this.booksPageIndex);
          this.openSnackBar('Book had been updated');
        }
      });
  }

  public showDeleteModal(book: IBook): void {
    const deleteModal = this.dialog.open(ConfirmingDeleteModalComponent, {
      data: book,
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
          this._cdRef.markForCheck();

          this.getBooks(this.filters, this.booksPageSize, this.booksPageIndex);
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

}
