import { Injectable } from '@angular/core';

import { map, mergeMap } from 'rxjs/operators';

import { createEffect, Actions, ofType } from '@ngrx/effects';


import { GenresService } from './../../books/services/genres.service';
import {
  GetGenres,
  GetGenreById,
  CreateGenre,
  UpdateGenre,
  DeleteGenre,
  UpdateGenresList,
  UpdateGenreStatus,
  UpdateShownGenre
} from './../actions/genre.action';

@Injectable()
export class GenreEffects {

  public getGenresEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(GetGenres),
      mergeMap(({ quantity }) => {
        return this._service.getInQuantity(quantity).pipe(
          map((res) => UpdateGenresList({ data: res })),
        );
      },
      ),
    ),
  );

  public getGenreByIdEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(GetGenreById),
      mergeMap((action) => {
        return this._service.getById(action.id).pipe(
          map((res) => UpdateShownGenre({ genre: res })),
        );
      },
      ),
    ),
  );

  public createGenreEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(CreateGenre),
      mergeMap((action) => {
        return this._service.create(action.genre).pipe(
          map((res) => UpdateGenreStatus({ genre: res })),
        );
      },
      ),
    ),
  );

  public updateGenreEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(UpdateGenre),
      mergeMap((action) => {
        return this._service.update(action.genre).pipe(
          map((res) => UpdateGenreStatus({ genre: res })),
        );
      },
      ),
    ),
  );

  public deleteGenreEffect$ = createEffect(
    () => this.actions$.pipe(
      ofType(DeleteGenre),
      mergeMap((action) => {
        return this._service.delete(action.id).pipe(
          map((res) => UpdateGenreStatus({ genre: res })),
        );
      },
      ),
    ),
  );

  constructor(private actions$: Actions, private _service: GenresService) { }

}
