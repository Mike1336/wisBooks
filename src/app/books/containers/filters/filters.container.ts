import {
  Component,
  Input,
  OnInit,
  Output,
  EventEmitter,
  ViewChild,
  OnDestroy,
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef
} from '@angular/core';
import { FormGroup } from '@angular/forms';

import { MatDrawer } from '@angular/material/sidenav';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SidebarService } from './../../../layout/services/sidebar.service';
import { IGenre } from './../../interfaces/genre';
import {IFilters} from "../../interfaces/filters";

@Component({
  selector: 'filters-container',
  templateUrl: './filters.container.html',
  styleUrls: ['./filters.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersContainer implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  public genres: IGenre[];

  @Output()
  public applyForm: EventEmitter<IFilters> = new EventEmitter();

  @Output()
  public resetForm: EventEmitter<object> = new EventEmitter();

  @ViewChild(MatDrawer)
  public drawer: MatDrawer;

  public filtersForm: FormGroup;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);


  constructor(private _sidebarService: SidebarService, private _cdRef: ChangeDetectorRef) { }

  public ngOnInit(): void {
    this.filtersForm = new FormGroup({});
  }

  public ngAfterViewInit(): void {
    this._sidebarService.filSbStatus$
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

  public changeFilDrawer(data: boolean): void {
    this._sidebarService.changeFilSb(data);
  }

  public closeDrawerAndEmit(): void {
    this.drawer.close();
    this.applyForm.emit(this.filtersForm.value);
  }

  public closeDrawerAndReset(): void {
    this.filtersForm.reset();
    this.drawer.close();
    this.resetForm.emit();
  }

}
