import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Observable, ReplaySubject } from 'rxjs';
import { map, takeUntil, mergeMap, pluck } from 'rxjs/operators';

import { AuthorService } from '../../services/authors.service';

import { IAuthor, IAuthors } from './../../interfaces/author';


@Component({
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit, OnDestroy {

  public loadingPage: boolean;

  public displayedColumns: string[] = ['id', 'first_name', 'last_name'];
  public dataSource = new MatTableDataSource();
  public authorsQuantity: number;

  public authors$: Observable<IAuthor[]>;

  @ViewChild(MatSort)
  public sort: MatSort;

  // stream for unsubscribe with takeUntil operator
  private destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    private authorsService: AuthorService,
    ) { }

  public ngOnInit(): void {
    this.loadingPage = true;
    this.getAuthors()
      .pipe(
      takeUntil(this.destroy$),
      )
      .subscribe((authors) => {
        this.dataSource.data = authors;
        this.dataSource.sort = this.sort;
        this.loadingPage = false;
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }
  /**
   * Takes in a paginator and set to dataSource
   *
   * @param paginator The MatPaginator object from own component
   */
  public takePaginator(paginator: MatPaginator): void {
    this.dataSource.paginator = paginator;
  }
  /**
   * Returns Observable with authors list
   */
  public getAuthors(): Observable<IAuthor[]> {
    return this.authorsService.getAuthorsInQuantity(1)
      .pipe(
        map((data) => {
          return data.meta.records;
        }),
        mergeMap((quantity: number): Observable<IAuthors> => {
          this.authorsQuantity = quantity;

          return this.authorsService.getAuthorsInQuantity(quantity);
        }),
        pluck('authors'),
        );
  }

}
