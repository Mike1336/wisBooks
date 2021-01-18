import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, ReplaySubject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './book.view.html',
  styleUrls: ['./book.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookView implements OnInit, OnDestroy {

  public id$: Observable<number>;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  public ngOnInit(): void {
    this._initId();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public show404(): void {
    this._router.navigate(['/404'], { skipLocationChange: true });
  }

  private _initId(): void {
    this.id$ = this._route.params
    .pipe(
      pluck('id'),
      takeUntil(this._destroy$),
    );
  }

}
