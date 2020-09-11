import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs';
import { pluck, map } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book';
import { IGenre } from '../../interfaces/genre';
import { IFilters } from '../../interfaces/filters';

import { GenresService } from './../../services/genres.service';
import { IPaginatorData,
         PaginatorComponent,
 } from './../../../layout/paginator/paginator.component';
import { FiltersComponent } from '../filters/filters.component';


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
    this.loadingPage = true;
    this.genres$ = this.genresService.getGenres()
        .pipe(pluck('genres'));

    this.getBooks();
    setTimeout(() => {
      this.loadingPage = false;
    }, 1000);
  }

  public changePageSize(pagData: IPaginatorData): void {
    this.getBooks(this.filters, pagData.pageSize, pagData.pageIndex);
  }
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
        // если номер страницы выше чем 1, значит было вызвано отображение
        // другой страницы одного жанра
        if (page === 1) {
          this.pag.moveToFirstPage();
        }
        data.books.length === 0 ?
        this.emptyResult = true :
        this.emptyResult = false ;

        return data.books;
      }));

    setTimeout(() => {
      this.loadingBooks = false;
    }, 500);
  }

  public lol(filters): void {
      this.filters = filters;
      this.getBooks(filters);
    console.log(filters);
  }
  public resetFilters(): void {
    this.form.filtersForm.reset();
    this.filters = undefined
    this.getBooks();
  }

}
