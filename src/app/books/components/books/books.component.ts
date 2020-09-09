import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { Observable, forkJoin, ReplaySubject } from 'rxjs';
import { pluck, map, takeUntil } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { IBook } from '../../interfaces/book';
import { IGenre } from '../../interfaces/genre';

import { GenresService } from './../../services/genres.service';
import { IPaginatorData,
         PaginatorComponent,
 } from './../../../layout/paginator/paginator.component';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {

  public loadingPage: boolean;
  public loadingBooks: boolean;

  public filterBy: string;
  public booksQuantity: number = 0;

  public books$: Observable<IBook[]>;
  public genres$: Observable<IGenre[]>;

  // private destroy$: ReplaySubject<any> = new ReplaySubject(1);

  @ViewChild(PaginatorComponent) private pag: PaginatorComponent;

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

  public ngOnDestroy(): void {
    // this.destroy$.next(null);
    // this.destroy$.complete();
  }

  public changePageSize(pagData: IPaginatorData): void {
    this.getBooks(this.filterBy, pagData.pageSize, pagData.pageIndex);
  }
  public getBooks(
    genre: string = null,
    booksQuantity: number = 10,
    page: number = 0,
    ): void {// если номер страницы выше чем 1, значит было вызвано отображение другой страницы одного жанра
    this.loadingBooks = true;

    this.books$ = this.booksService.getBooks(booksQuantity, page += 1, genre)
    .pipe(
      map((data) => {
        this.booksQuantity = data.meta.records;
        // если номер страницы выше чем 1, значит было вызвано отображение
        // другой страницы одного жанра
        if (page === 1) {
          this.pag.moveToFirstPage();
        }

        return data.books;
      }));

    setTimeout(() => {
      this.loadingBooks = false;
    }, 500);
  }

}
