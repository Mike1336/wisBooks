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
  public loadingAuthors: boolean;

  public displayedColumns: string[] = ['id', 'first_name', 'last_name'];
  public dataSource = new MatTableDataSource();
  public authorsQuantity: number;

  public authors$: Observable<IAuthor[]>;

  @ViewChild(MatSort)
  public sort: MatSort;

  private destroy$: ReplaySubject<number> = new ReplaySubject(1);
  constructor(
    private authorsService: AuthorService,
    ) { }
  public ngOnInit(): void {
    this.loadingPage = true;
    this.authorsService.getAuthorsInQuantity(1)
      .pipe(
        map((data) => {
          return data.meta.records;
        }),
        mergeMap((quantity: number): Observable<IAuthors> => {
          this.authorsQuantity = quantity;

          return this.authorsService.getAuthorsInQuantity(quantity);
        }),
        pluck('authors'),
        takeUntil(this.destroy$),
        )
      .subscribe((authors) => {
        this.dataSource.data = authors;
        this.dataSource.sort = this.sort;
        setTimeout(() => {
          this.loadingPage = false;
        }, 1000);
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
