import { createReducer, on } from '@ngrx/store';

import { IGenre, IGenres } from '../../books/interfaces/genre';

import { UpdateGenresList, UpdateGenreStatus, UpdateShownGenre } from './../actions/genre.action';

export interface IGenresState {
  list: IGenres;
  shown: IGenre;
  updated: IGenre;
}

const genresState: IGenresState = {
  list: null,
  shown: null,
  updated: null,
};

export const genresReducer = createReducer(
  genresState,
  on(UpdateGenresList, (state, action) => ({ ...state, list: action.data })),
  on(UpdateShownGenre, (state, action) => ({ ...state, shown: action.genre })),
  on(UpdateGenreStatus, (state, action) => ({ ...state, updated: action.genre })),
);

