import { createSelector } from '@ngrx/store';

import { IBook, IBooks } from '../../books/interfaces/book';
import { IBooksState } from '../reducers/book.reducer';

const getList = (state: IBooksState): IBooks => state.list;
const getChanged = (state: IBooksState): IBook => state.updated;
const getDisplayed = (state: IBooksState): IBook => state.shown;

export const getBookList = createSelector(
  (state: { bookState: IBooksState }) => state.bookState,
  getList,
);

export const getUpdatedBook = createSelector(
  (state: { bookState: IBooksState }) => state.bookState,
  getChanged,
);

export const getShownBook = createSelector(
  (state: { bookState: IBooksState }) => state.bookState,
  getDisplayed,
);
