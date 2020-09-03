import { Component, OnInit, OnDestroy } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';

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
  // public authorPageQuantity: number = 0;
  public authorsQuantity: number = 0;
  public loading: boolean;

  public displayedColumns: string[] = ['#', 'firstname', 'lastname'];

  private authors$: Observable<IAuthors>;
  private authorQuantity$: Observable<IAuthors>;
  private destroy$ = new ReplaySubject<any>(1);

  constructor(
    private authorsService: AuthorService,
    // private route: ActivatedRoute,
    ) { }

  public ngOnInit(): void {
    // this.route.params
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((params) => {
    //     this.authors$ = this.authorsService.getAuthorsInPage(params.number);
    //   });
    // this.authors$
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe((data) => {
    //     this.authors = data.authors;
    //     console.log(this.authors)
    //     this.authorPageQuantity = data.meta.pages;
    //   });
    this.loading = true;
    this.authorQuantity$ = this.authorsService.getAuthorsInFirstPage();
    this.authorQuantity$
      .pipe(takeUntil(this.destroy$))
      .subscribe((data) => {
        this.authors$ = this.authorsService.getAuthorsInQuantity(data.meta.records);
        this.authors$
          .pipe(
            delay(1000),
            takeUntil(this.destroy$),
            )
          .subscribe((authors) => {
            console.log(authors)
            this.authors = authors.authors;
            this.loading = false;
          });
      });

  }
  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

}
