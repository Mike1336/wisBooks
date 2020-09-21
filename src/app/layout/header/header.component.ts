import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidebarService } from './../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  public booksPageIcon: boolean;
  public filtersDrawer: boolean;
  public navigateDrawer: boolean;

  @Output()
  public burgerClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public filtersClicked: EventEmitter<any> = new EventEmitter<any>();

  private destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private router: Router, private sbService: SidebarService) {}

  public ngOnInit(): void {
    this.router.events
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          event.url === '/books' ?
            this.booksPageIcon = true :
            this.booksPageIcon = false;
        }
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }

  public showSideBar(): void {
    this.navigateDrawer = !this.navigateDrawer;
    this.sbService.changeNavSb(this.navigateDrawer);
  }

  public showBooksFilters(): void {
    this.filtersDrawer = !this.filtersDrawer;
    this.sbService.changeFilSb(this.filtersDrawer);
  }

}
