import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BooksService } from '../../services/books.service';
import { AuthorService } from '../../services/authors.service';
import { GenresService } from '../../services/genres.service';
import { IBook, IBooks } from '../../interfaces/book';
import { IAuthor, IAuthors } from '../../interfaces/author';
import { IGenre } from '../../interfaces/genre';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {

  @ViewChild(MatPaginator, { static: true }) public paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) public sort: MatSort;

  public books: IBook[];
  public authors: IAuthor[];

  public books$: Observable<IBooks>;
  public authors$: Observable<IAuthors>;

  public displayedColumns: string[] = ['title', 'author', 'genre'];
  public dataSource: MatTableDataSource<IBook>;

  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private booksService: BooksService,
    private authorsService: AuthorService,
    private genresService: GenresService,
    ) {
    this.books$ = this.booksService.getBooks();
    this.books$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.books = data.books;
        console.log(this.books);
      });
    this.dataSource = new MatTableDataSource(this.books);

    this.authors$ = this.authorsService.getAuthors();
    this.authors$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.authors = data.authors;
        console.log(this.authors);
      });
  }
  public ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataSource);

    // if (this.books.length > 0) {
    //   this.books.forEach((book) => {
    //     book.author = this.authors.find((author) => {
    //       return book.author_id === author.id;
    //     });
    //   });
    //   console.log(this.books)
    // }
  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}

