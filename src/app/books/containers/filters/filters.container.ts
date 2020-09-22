import { Component, Input, OnInit, Output, EventEmitter, ViewChild, OnDestroy, AfterViewInit
} from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { Observable, ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidebarService } from './../../../layout/services/sidebar.service';
import { IGenre } from './../../interfaces/genre';

@Component({
  selector: 'filters-container',
  templateUrl: './filters.container.html',
  styleUrls: ['./filters.container.scss'],
})
export class FiltersContainer implements OnInit, AfterViewInit, OnDestroy {

  public filtersSb$: Observable<boolean>;

  @Input()
  public genres: IGenre[];
  @Output()
  public applyForm: EventEmitter<object> = new EventEmitter();
  @Output()
  public resetForm: EventEmitter<object> = new EventEmitter();
  @ViewChild(MatDrawer)
  public drawer: MatDrawer;

  private destroy$: ReplaySubject<number> = new ReplaySubject(1);


  constructor(private sidebarService: SidebarService) { }

  public ngOnInit(): void {
  }
  public ngAfterViewInit(): void {
    this.filtersSb$ = this.sidebarService.filSbOpen$;
    this.filtersSb$
      .pipe(
        takeUntil(this.destroy$),
      )
      .subscribe((data) => {
        data ?
        this.drawer.open() :
        this.drawer.close();
      });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(null);
    this.destroy$.complete();
  }


}
