import { Injectable } from '@angular/core';

import { map, mergeMap } from 'rxjs/operators';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { BooksService } from './../books/services/books.service';
import {
  GetBooks,
  GetBookById,
  CreateBook,
  UpdateBook,
  DeleteBook,
  UpdateBooksList,
  UpdateBookStatus,
  UpdateShownBook,
} from './actions';

@Injectable()
export class RootEffects {

  public getBooksEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(GetBooks),
      mergeMap(({ quantity, page, filters }) => {
        return this._booksService.getBooks(quantity, page, filters).pipe(
          map((res) => UpdateBooksList({ data: res })),
        );
      },
      ),
    ),
  );

  public getBookByIdEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(GetBookById),
      mergeMap((action) => {
        return this._booksService.getBookById(action.id).pipe(
          map((res) => UpdateShownBook({ book: res })),
        );
      },
      ),
    ),
  );

  public createBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(CreateBook),
      mergeMap((action) => {
        return this._booksService.createBook(action.book).pipe(
          map((res) => UpdateBookStatus({ book: res })),
        );
      },
      ),
    ),
  );

  public updateBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateBook),
      mergeMap((action) => {
        return this._booksService.updateBook(action.book).pipe(
          map((res) => UpdateBookStatus({ book: res })),
        );
      },
      ),
    ),
  );

  public deleteBookEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(DeleteBook),
      mergeMap((action) => {
        return this._booksService.deleteBook(action.id).pipe(
          map((res) => UpdateBookStatus({ book: res })),
        );
      },
      ),
    ),
  );

  constructor(private actions$: Actions, private _booksService: BooksService) { }

}
