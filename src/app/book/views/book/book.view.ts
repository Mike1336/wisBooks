import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ReplaySubject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './book.view.html',
  styleUrls: ['./book.view.scss'],
})
export class BookView implements OnInit, OnDestroy {

  public id: number;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.route.params
      .pipe(
        pluck('id'),
        takeUntil(this._destroy$),
      )
      .subscribe(
        (id) => {
          this.id = id;
        },
      );
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public show404(): void {
    this.router.navigate(['/404'], { skipLocationChange: true });
  }

}
