import { takeUntil } from 'rxjs/operators';
import { ReplaySubject } from 'rxjs';
import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { SidebarService } from './../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatDrawer) 
  public drawer: MatDrawer;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private sidebar: SidebarService) {
  }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this.sidebar.navSbStatus$
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

}
