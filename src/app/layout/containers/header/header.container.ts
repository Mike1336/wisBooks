import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'header-container',
  templateUrl: './header.container.html',
  styleUrls: ['./header.container.scss'],
})
export class HeaderContainer implements OnInit, OnDestroy {

  public filtersDrawer: boolean;
  public navigateDrawer: boolean;

  @Input()
  public urlStream$: Observable<string>;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private sbService: SidebarService) { }

  public ngOnInit(): void {
    this.sbService.filSbStatus$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((filSbStatus) => {
        this.filtersDrawer = filSbStatus;
      },
    );

    this.sbService.navSbStatus$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((navSbStatus) => {
        this.navigateDrawer = navSbStatus;
      },
      );
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public changeSbStatus(): void {
    this.navigateDrawer = !this.navigateDrawer;
    this.sbService.changeNavSb(this.navigateDrawer);
  }

  public changeFilStatus(): void {
    this.filtersDrawer = !this.filtersDrawer;
    this.sbService.changeFilSb(this.filtersDrawer);
  }

}
