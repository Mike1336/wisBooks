import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable, ReplaySubject } from 'rxjs';
import { pluck, takeUntil } from 'rxjs/operators';

@Component({
  templateUrl: './book.view.html',
  styleUrls: ['./book.view.scss'],
})
export class BookView implements OnInit, OnDestroy {

  private _paramsStream$: ReplaySubject<number> = new ReplaySubject(1);
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
          this._paramsStream$.next(id);
        },
      );
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public get paramsStream$(): Observable<number> {
    return this._paramsStream$;
  }

  public show404(): void {
    this.router.navigate(['/404'], { skipLocationChange: true });
  }

}
