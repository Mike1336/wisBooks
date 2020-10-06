import { Component, OnInit, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'header-view',
  templateUrl: './header.view.html',
  styleUrls: ['./header.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderView implements OnInit, OnDestroy {

  private _urlStream$: ReplaySubject<string> = new ReplaySubject(1);

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private router: Router, private _cdRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this._urlStream$.next(event.urlAfterRedirects);
        }
        this._cdRef.markForCheck();
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public get urlStream$(): Observable<string> {
    return this._urlStream$.asObservable();
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
