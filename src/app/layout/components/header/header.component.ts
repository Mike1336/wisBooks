import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy, Input } from '@angular/core';

import { ReplaySubject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidebarService } from './../../services/sidebar.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  public filtersIcon: boolean;

  @Input()
  public urlStream$: Observable<string>;

  @Output()
  public burgerClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public filtersClicked: EventEmitter<any> = new EventEmitter<any>();

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor() {}

  public ngOnInit(): void {
    this.urlStream$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        (url) => {
          url === '/books'
          ? this.filtersIcon = true
          : this.filtersIcon = false;
        },
    );
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public showSideBar(): void {
    this.burgerClicked.emit();
  }

  public showBooksFilters(): void {
    this.filtersClicked.emit();
  }

}
