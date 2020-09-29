import { Component, OnInit, AfterViewInit, ViewChild, OnDestroy } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sidebar-container',
  templateUrl: './sidebar.container.html',
  styleUrls: ['./sidebar.container.scss'],
})
export class SidebarContainer implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatDrawer)
  public drawer: MatDrawer;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _sidebarService: SidebarService) { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this._sidebarService.navSbStatus$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((data) => {
        if (data) {
          this.drawer.open();
        } else {
          this.drawer.close();
        }
      });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }
  public changeNavDrawer(data: boolean): void {
    this._sidebarService.changeNavSb(data);
  }

}
