import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MatPaginator } from '@angular/material/paginator';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooksService } from './../../services/books.service';
import { AuthorService } from './../../services/authors.service';
import { GenresService } from './../../services/genres.service';
import { IBook, IBooks } from './../../interfaces/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {

  public books: IBook[] = [];
  public bookQuantity: number = 0;

  public books$: Observable<IBooks>;

  public displayedColumns: string[] = ['id', 'title', 'price', 'genres'];

  @ViewChild(MatPaginator) public paginator: MatPaginator;

  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private booksService: BooksService,
    private authorsService: AuthorService,
    private genresService: GenresService,
    private router: Router,
    private route: ActivatedRoute,
    ) {
  }
  public ngOnInit(): void {
    this.route.params
      .pipe(takeUntil(this.destroy$))
      .subscribe((params) => {
        this.books$ = this.booksService.getBooksInPage(params.number);
      });
    this.books$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.books = data.books;
        this.bookQuantity = data.meta.pages;
      });
  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}

