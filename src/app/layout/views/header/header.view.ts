import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'header-view',
  templateUrl: './header.view.html',
  styleUrls: ['./header.view.scss'],
})
export class HeaderView implements OnInit, OnDestroy {

  private _urlStream$: ReplaySubject<string> = new ReplaySubject(1);

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private router: Router) { }

  public ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this._urlStream$.next(event.urlAfterRedirects);
        }
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public get urlStream$(): Observable<string> {
    return this._urlStream$;
  }


}
