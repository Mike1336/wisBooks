import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

import { IBook } from '../../interfaces/book';
import { IFilters } from '../../interfaces/filters';
import { IGenre } from '../../interfaces/genre';

import { BooksService } from './../../services/books.service';
import { IPaginatorData } from './../../../layout/interfaces/paginator-data';
import { GenresService } from './../../services/genres.service';

@Component({
  selector: 'books-container',
  templateUrl: './books.container.html',
  styleUrls: ['./books.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksContainer implements OnInit {

  public emptyResult: boolean;

  public filters: IFilters;
  public booksQuantity: number = 0;
  public booksIndex: number = 0;

  public books$: Observable<IBook[]>;
  public genres$: Observable<IGenre[]>;

  constructor(
    private booksService: BooksService,
    private genresService: GenresService,
  ) {}

  public ngOnInit(): void {
    this.genres$ = this.genresService.getGenres().pipe(pluck('genres'));

    this.getBooks();
  }

  /**
   * Takes in a 3 parameters and getting books
   *
   * @param filters The optional parameter - data from filters form
   * @param booksQuantity The optional parameter for query with default value: 10
   * @param page The optional parameter for query with default value: 0 (first page)
   */
  public getBooks(filters?: IFilters, booksQuantity: number = 10, page: number = 0): void {
    this.books$ = this.booksService.getBooks(booksQuantity, page, filters).pipe(
      map((data) => {
        this.booksQuantity = data.meta.records;

        data.books.length > 0
          ? this.emptyResult = false
          : this.emptyResult = true;

        return data.books;
      }),
    );
  }

  public changePageSize(pagData: IPaginatorData): void {
    this.getBooks(this.filters, pagData.pageSize, pagData.pageIndex);
  }

  public getFilteredBooks(filters: IFilters): void {
    this.filters = filters;
    this.getBooks(filters);
  }

  public resetFilters(): void {
    this.getBooks();
  }

}
