import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book';
import { IGenre } from '../../interfaces/genre';
import { IFilters } from '../../interfaces/filters';
import { FiltersComponent } from '../filters/filters.component';

import { GenresService } from './../../services/genres.service';
import { PaginatorComponent } from './../../../layout/paginator/paginator.component';
import { IPaginatorData } from './../../../layout/interfaces/paginator-data';


@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {

  public loadingPage: boolean;
  public loadingBooks: boolean;
  public emptyResult: boolean;

  public filters: IFilters;
  public booksQuantity: number = 0;

  public books$: Observable<IBook[]>;
  public genres$: Observable<IGenre[]>;


  @ViewChild(PaginatorComponent)
  private pag: PaginatorComponent;

  @ViewChild(FiltersComponent)
  private form: FiltersComponent;

  constructor(
    private booksService: BooksService,
    private genresService: GenresService,
    ) {
  }
  public ngOnInit(): void {
    this.genres$ = this.genresService.getGenres()
        .pipe(pluck('genres'));

    this.getBooks();
  }

  public changePageSize(pagData: IPaginatorData): void {
    this.getBooks(this.filters, pagData.pageSize, pagData.pageIndex);
  }
  /**
   * Takes in a 3 parameters and getting books
   *
   * @param filters The optional parameter - data from filters form
   * @param booksQuantity The optional parameter for query with default value: 10
   * @param page The optional parameter for query with default value: 0 (first page)
   */
  public getBooks(
    filters?: IFilters,
    booksQuantity: number = 10,
    page: number = 0,
  ): void {
    this.loadingBooks = true;
    page += 1;
    this.books$ = this.booksService.getBooks(booksQuantity, page, filters)
    .pipe(
      map((data) => {
        this.booksQuantity = data.meta.records;

        if (page === 1) {
          this.pag.moveToFirstPage();
        }
        data.books.length > 0 ?
        this.emptyResult = false :
        this.emptyResult = true ;

        return data.books;
      }));
    this.loadingBooks = false;
  }

  public getFilteredBooks(filters: IFilters): void {
    this.filters = filters;
    this.getBooks(filters);
  }
  public resetFilters(): void {
    this.form.showResetButton = false;
    this.form.filtersForm.reset();
    this.getBooks();
  }

}
