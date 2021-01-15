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
import { RootEffects } from './effects';
import { rootReducer } from './reducers';
import { getUpdatedBook, getBookList, getShownBook } from './selectors';

export const fromRoot = {
  GetBooks,
  GetBookById,
  CreateBook,
  UpdateBook,
  DeleteBook,
  rootReducer,
  RootEffects,
  getBookList,
  getUpdatedBook,
  getShownBook,
  UpdateBooksList,
  UpdateBookStatus,
  UpdateShownBook,
};

