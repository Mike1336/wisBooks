import {
    Component,
    OnInit,
    Input,
    Output,
    EventEmitter,
    OnDestroy,
    ChangeDetectionStrategy,
    ChangeDetectorRef
} from '@angular/core';
import {Router} from '@angular/router';
import {animate, style, transition, trigger} from "@angular/animations";

import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import {EMPTY, iif, Subject} from 'rxjs';
import {catchError, pluck, switchMap, takeUntil, tap} from 'rxjs/operators';

import {ConfirmingDeleteModalComponent} from '../../../books/components/confirming-delete-modal/confirming-delete-modal.component';
import {IAuthors, IAuthor} from '../../../authors/interfaces/author';
import {IGenres, IGenre} from '../../../books/interfaces/genre';
import {GenresService} from '../../../books/services/genres.service';
import {AuthorsService} from '../../../authors/services/authors.service';
import {BookEditModalComponent} from '../../../books/components/book-edit-modal/book-edit-modal.component';
import {AuthService} from '../../../auth/services/auth.service';
import {IBook} from '../../../books/interfaces/book';
import {BooksService} from '../../../books/services/books.service';

@Component({
    selector: 'book-container',
    templateUrl: './book.container.html',
    styleUrls: ['./book.container.scss'],
    animations: [
        trigger('bookTransitions', [
            transition(':enter', [
                style({opacity: 0}),
                animate('250ms', style({opacity: 1})),
            ]),
            transition(':leave', [
                animate('250ms', style({opacity: 0}))
            ])
        ])
    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookContainer implements OnInit, OnDestroy {

    @Input()
    public id: number;

    @Output()
    public contentNotFound = new EventEmitter<Error>();

    public book: IBook;

    public authors: IAuthor[];

    public genres: IGenre[];

    private _destroy$ = new Subject<void>();

    constructor(
        private _booksService: BooksService,
        private _genresService: GenresService,
        private _authorsService: AuthorsService,
        private _authService: AuthService,
        private _dialog: MatDialog,
        private _router: Router,
        private _snackBar: MatSnackBar,
        private _cdRef: ChangeDetectorRef,
    ) {}

    public get isAuth(): boolean {
        return this._authService.isAuth();
    }

    public ngOnChanges(): void {
        console.log(this.id)
        this._fetchBook();
    }

    public ngOnInit(): void {
        this._fetchGenres();
        this._fetchAuthors();
    }

    public ngOnDestroy(): void {
        this._destroy$.next();
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
                  return iif(
                        () => !!bookData,
                        this._booksService.updateBook(bookData),
                        EMPTY
                    );
                }),
                tap((result) => {
                    if (result) {
                        this._fetchBook();
                        this._openSnackBar('Book has been updated');
                    }
                }),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    public showDeleteModal(): void {
        const deleteModal = this._dialog.open(ConfirmingDeleteModalComponent, {
            data: this.book,
        });

        deleteModal.afterClosed()
            .pipe(
                switchMap((bookId: number) => {
                    return iif(
                        () => !!bookId,
                        this._booksService.getBookById(bookId),
                        EMPTY
                    );
                }),
                tap((result: IBook) => {
                    if (result) {
                        this._openSnackBar(`Book: "${result.title}" has been successfully deleted`);
                        this._router.navigate(['/books/1']);
                    }
                }),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    private _fetchGenres(): void {
        this._genresService.getGenresInQuantity(1)
            .pipe(
                switchMap((data: IGenres) => {
                    return this._genresService.getGenresInQuantity(data.meta.records);
                }),
                pluck('genres'),
                tap((data: IGenre[]) => this.genres = data),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    private _fetchAuthors(): void {
        this._authorsService.getAuthorsInQuantity(1)
            .pipe(
                switchMap((data: IAuthors) => {
                    return this._authorsService.getAuthorsInQuantity(data.meta.records);
                }),
                pluck('authors'),
                tap((authors) => this.authors = authors),
                takeUntil(this._destroy$),
            )
            .subscribe();
    }

    private _fetchBook(): void {
        this._booksService.getBookById(this.id)
            .pipe(
                tap((book) => {
                    this.book = book;
                    this._cdRef.markForCheck();
                }),
                catchError((err) => {
                        this.contentNotFound.emit(err);
                        throw new Error(`Error with book: ${err}`);
                    }
                ),
            )
            .subscribe();
    }

    private _openSnackBar(message: string): void {
        this._snackBar.open(message, 'OK', {
            duration: 2000,
        });
    }

}
