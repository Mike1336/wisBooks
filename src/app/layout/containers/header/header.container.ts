import { Component, Input, OnInit, OnDestroy, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'header-container',
  templateUrl: './header.container.html',
  styleUrls: ['./header.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderContainer implements OnInit, OnDestroy {

  public filtersDrawer: boolean;
  public navigateDrawer: boolean;
  public isBooksPage: boolean;

  @Input()
  public urlStream$: Observable<string>;

  @Output()
  public logout: EventEmitter<any> = new EventEmitter<any>();

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _sbService: SidebarService) { }

  public ngOnInit(): void {
    this._sbService.filSbStatus$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((filSbStatus) => {
        this.filtersDrawer = filSbStatus;
      },
    );

    this._sbService.navSbStatus$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((navSbStatus) => {
        this.navigateDrawer = navSbStatus;
      },
      );

    this.urlStream$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((url) => {
        url === '/books'
        ? this.isBooksPage = true
        : this.isBooksPage = false;
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public changeSbStatus(): void {
    this.navigateDrawer = !this.navigateDrawer;
    this._sbService.changeNavSb(this.navigateDrawer);
  }

  public changeFilStatus(): void {
    this.filtersDrawer = !this.filtersDrawer;
    this._sbService.changeFilSb(this.filtersDrawer);
  }

}
