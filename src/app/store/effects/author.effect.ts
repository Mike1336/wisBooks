import { Injectable } from '@angular/core';

import { map, mergeMap } from 'rxjs/operators';

import { createEffect, Actions, ofType } from '@ngrx/effects';

import { AuthorsService } from './../../authors/services/authors.service';
import {
  GetAuthors,
  GetAuthorById,
  CreateAuthor,
  UpdateAuthor,
  DeleteAuthor,
  UpdateAuthorsList,
  UpdateAuthorStatus,
  UpdateShownAuthor
} from './../actions/author.action';

@Injectable()
export class AuthorEffects {

  public getAuthorsEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(GetAuthors),
      mergeMap(({ quantity }) => {
        return this._service.getInQuantity(quantity).pipe(
          map((res) => UpdateAuthorsList({ data: res })),
        );
      },
      ),
    ),
  );

  public getAuthorByIdEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(GetAuthorById),
      mergeMap((action) => {
        return this._service.getById(action.id).pipe(
          map((res) => UpdateShownAuthor({ author: res })),
        );
      },
      ),
    ),
  );

  public createAuthorEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(CreateAuthor),
      mergeMap((action) => {
        return this._service.create(action.author).pipe(
          map((res) => UpdateAuthorStatus({ author: res })),
        );
      },
      ),
    ),
  );

  public updateAuthorEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateAuthor),
      mergeMap((action) => {
        return this._service.update(action.author).pipe(
          map((res) => UpdateAuthorStatus({ author: res })),
        );
      },
      ),
    ),
  );

  public deleteAuthorEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(DeleteAuthor),
      mergeMap((action) => {
        return this._service.delete(action.id).pipe(
          map((res) => UpdateAuthorStatus({ author: res })),
        );
      },
      ),
    ),
  );

  constructor(private actions$: Actions, private _service: AuthorsService) { }

}
