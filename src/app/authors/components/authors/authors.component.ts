import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil, delay } from 'rxjs/operators';

import { AuthorService } from '../../services/authors.service';

import { IAuthor, IAuthors } from './../../interfaces/author';


@Component({
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit, OnDestroy {

  public authors: IAuthor[] = [];
  public loading: boolean;

  public displayedColumns: string[] = ['#', 'firstname', 'lastname'];
  public dataSource = new MatTableDataSource();

  private authors$: Observable<IAuthors>;
  private authorsQuantity$: Observable<IAuthors>;
  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private authorsService: AuthorService,
    ) { }

  public ngOnInit(): void {
    this.loading = true;
    this.authorsQuantity$ = this.authorsService.getAuthorsInFirstPage();
    this.authorsQuantity$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.authors$ = this.authorsService.getAuthorsInQuantity(data.meta.records);
        this.authors$
          .pipe(
            delay(1000),
            takeUntil(this.destroy$),
            )
          .subscribe((authors) => {
            this.authors = authors.authors;
            this.dataSource.data = authors.authors;
            this.loading = false;
          });
      });
  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  public takePaginator(paginator: MatPaginator): void {
    this.dataSource.paginator = paginator;
  }
}
