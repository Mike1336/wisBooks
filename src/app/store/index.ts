import {
  GetBooks,
  GetBookById,
  CreateBook,
  UpdateBook,
  DeleteBook,
  UpdateBooksList,
  UpdateBookStatus,
  UpdateShownBook,
} from './actions/book.action';
import {
  GetAuthors,
  GetAuthorById,
  CreateAuthor,
  UpdateAuthor,
  DeleteAuthor,
  UpdateAuthorsList,
  UpdateAuthorStatus,
  UpdateShownAuthor
} from './actions/author.action';
import {
  GetGenres,
  GetGenreById,
  CreateGenre,
  UpdateGenre,
  DeleteGenre,
  UpdateGenresList,
  UpdateGenreStatus,
  UpdateShownGenre
} from './actions/genre.action';
import { BookEffects } from './effects/book.effect';
import { AuthorEffects } from './effects/author.effect';
import { GenreEffects } from './effects/genre.effect';
import { booksReducer } from './reducers/book.reducer';
import { authorsReducer } from './reducers/author.reducer';
import { genresReducer } from './reducers/genre.reducer';
import { getUpdatedBook, getBookList, getShownBook } from './selectors/book.selector';
import { getUpdatedAuthor, getAuthorsList, getShownAuthor } from './selectors/author.selector';
import { getUpdatedGenre, getGenresList, getShownGenre } from './selectors/genre.selector';

export const fromBook = {
  GetBooks,
  GetBookById,
  CreateBook,
  UpdateBook,
  DeleteBook,
  booksReducer,
  BookEffects,
  getBookList,
  getUpdatedBook,
  getShownBook,
  UpdateBooksList,
  UpdateBookStatus,
  UpdateShownBook,
};

export const fromAuthor = {
  GetAuthors,
  GetAuthorById,
  CreateAuthor,
  UpdateAuthor,
  DeleteAuthor,
  authorsReducer,
  AuthorEffects,
  getAuthorsList,
  getUpdatedAuthor,
  getShownAuthor,
  UpdateAuthorsList,
  UpdateAuthorStatus,
  UpdateShownAuthor,
};

export const fromGenre = {
  GetGenres,
  GetGenreById,
  CreateGenre,
  UpdateGenre,
  DeleteGenre,
  genresReducer,
  GenreEffects,
  getGenresList,
  getUpdatedGenre,
  getShownGenre,
  UpdateGenresList,
  UpdateGenreStatus,
  UpdateShownGenre,
};
