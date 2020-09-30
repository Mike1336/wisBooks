import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'sidebar-container',
  templateUrl: './sidebar.container.html',
  styleUrls: ['./sidebar.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarContainer implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild(MatDrawer)
  public drawer: MatDrawer;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _sidebarService: SidebarService, private _cdRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
  }

  public ngAfterViewInit(): void {
    this._sidebarService.navSbStatus$
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((data) => {
        data
          ? this.drawer.open()
          : this.drawer.close();

        this._cdRef.markForCheck();
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
