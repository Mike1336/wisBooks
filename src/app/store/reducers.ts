import { createReducer, on } from '@ngrx/store';

import { IBooks, IBook } from './../books/interfaces/book';
import { UpdateBooksList, UpdateBookStatus, UpdateShownBook } from './actions';

export interface IRootState {
  books: IBooks;
  shownBook: IBook;
  updatedBook: IBook;
}

const initialState: IRootState = {
  books: null,
  updatedBook: null,
  shownBook: null,
};

export const rootReducer = createReducer(
    initialState,
    on(UpdateBooksList, (state, action) => ({ ...state, books: action.data })),
    on(UpdateBookStatus, (state, action) => ({ ...state, updatedBook: action.book })),
    on(UpdateShownBook, (state, action) => ({ ...state, shownBook: action.book })),
);
