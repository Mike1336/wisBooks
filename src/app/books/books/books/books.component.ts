import { Component, OnInit } from '@angular/core';

import { BooksService } from './../../services/books.service';
import { AuthorService } from './../../services/authors.service';
import { GenresService } from './../../services/genres.service';
import { IBook } from './../../interfaces/book';
import { IGenre } from './../../interfaces/genre';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  constructor(
    private booksService: BooksService,
    private authorsService: AuthorService,
    private genresService: GenresService,
    ) { }

  public ngOnInit(): void {
    // this.booksService.getBooks()
    //   .subscribe(
    //     (el) => {
    //       console.log(el);
    //     });
    // this.genresService.getGenres()
    //   .subscribe(
    //       (el) => {
    //         console.log(el);
    //       });
    // this.genresService.getGenreById(5)
    //   .subscribe(
    //         (el) => {
    //           console.log(el);
    //         });
      // this.booksService.getBookById(1)
    //   .subscribe(
    //       (el) => {
    //         console.log(el);
    //       });
    // this.booksService.getBookByAuthor(3)
    //   .subscribe(
    //         (el) => {
    //           console.log(el);
    //         });
  }

}
