import { createSelector } from '@ngrx/store';

import { IGenre, IGenres } from '../../books/interfaces/genre';

import { IGenresState } from './../reducers/genre.reducer';

const getList = (state: IGenresState): IGenres => state.list;
const getChanged = (state: IGenresState): IGenre => state.updated;
const getDisplayed = (state: IGenresState): IGenre => state.shown;

export const getGenresList = createSelector(
  (state: { genreState: IGenresState }) => state.genreState,
  getList,
);

export const getUpdatedGenre = createSelector(
  (state: { genreState: IGenresState }) => state.genreState,
  getChanged,
);

export const getShownGenre = createSelector(
  (state: { genreState: IGenresState }) => state.genreState,
  getDisplayed,
);
