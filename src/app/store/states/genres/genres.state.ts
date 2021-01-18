import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';

import { tap, catchError, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { State, Action, StateContext } from '@ngxs/store';

import { Create, Update, Delete } from './../../actions/common.actions';
import { GetAllGenres, GetGenreById, GetGenresInQuantity } from './../../actions/genres.actions';
import { GenresService } from './../../../books/services/genres.service';
import { IGenres, IGenre } from './../../../books/interfaces/genre';
import { IState } from './../interfaces/state';

@State<IState<IGenres, IGenre>>({
  name: 'genres',
  defaults: {
    list: null,
    item: null,
  },
})
@Injectable()
export class GenresState {

  constructor(
    private _service: GenresService,
    private _router: Router,
    private _ngZone: NgZone,
  ) {}

  @Action(GetAllGenres)
  public getList(
    ctx: StateContext<IState<IGenres, IGenre>>,
  ): Observable<IGenres> {
    return this._service.getInQuantity(1).pipe(
      switchMap(
        ({ meta: { records } }: IGenres) => this._service.getInQuantity(records),
      ),
      tap((result: IGenres) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          list: result,
        });
      }),
    );
  }

  @Action(GetGenresInQuantity)
  public getInQuantity(
    ctx: StateContext<IState<IGenres, IGenre>>,
    { quantity }: GetGenresInQuantity,
  ): Observable<IGenres> {
    return this._service.getInQuantity(quantity).pipe(
      tap((result: IGenres) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          list: result,
        });
      }),
    );
  }

  @Action(GetGenreById)
  public getById(
    ctx: StateContext<IState<IGenres, IGenre>>,
    { id }: GetGenreById,
  ): Observable<IGenre> {
    return this._service.getById(id).pipe(
      catchError(
        () => {
          return this._ngZone.run(
            () => this._router.navigate(['/', '404'], { skipLocationChange: true }),
          );
        },
      ),
      tap((result: IGenre) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

  @Action(Create)
  public create(
    ctx: StateContext<IState<IGenres, IGenre>>,
    { item }: Create <IGenre> ,
  ): Observable <IGenre> {
    return this._service.create(item).pipe(
      tap((result: IGenre) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

  @Action(Update)
  public update(
    ctx: StateContext<IState<IGenres, IGenre>>,
    { item }: Update <IGenre> ,
  ): Observable <IGenre> {
    return this._service.update(item).pipe(
      tap((result: IGenre) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

  @Action(Delete)
  public delete(
    ctx: StateContext<IState<IGenres, IGenre>>,
    { id }: Delete,
  ): Observable<IGenre> {
    return this._service.delete(id).pipe(
      tap((result: IGenre) => {
        const state = ctx.getState();

        ctx.setState({
          ...state,
          item: result,
        });
      }),
    );
  }

}
