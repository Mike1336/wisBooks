import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDrawer } from '@angular/material/sidenav';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { IGenre } from '../../interfaces/genre';

import { SidebarService } from './../../../layout/services/sidebar.service';
import { MyValidator } from './../../validators/my.validator';

export const MY_FORMATS = {
  parse: {
    dateInput: 'YYYY-MM-DD',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY-MM',
    dateA11yLabel: 'YYYY-MM-DD',
    monthYearA11yLabel: 'YYYY-MM-DD',
  },
};
@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-US' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class FiltersComponent implements OnInit, AfterViewInit, OnDestroy {

  public filtersForm: FormGroup;
  public showResetButton: boolean;


  @Input()
  public genres: IGenre[];
  @Output()
  public applyForm: EventEmitter<object> = new EventEmitter();
  @Output()
  public resetForm: EventEmitter<object> = new EventEmitter();
  @ViewChild(MatDrawer)
  public drawer: MatDrawer;

  private destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private sidebar: SidebarService) { }

  public ngOnInit(): void {
    this.initForm();
  }
  public ngAfterViewInit(): void {
    this.sidebar.filSbOpen$
      .pipe(
        takeUntil(this.destroy$),
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
    this.destroy$.next(null);
    this.destroy$.complete();
  }


  public applyFilters(): void {
    this.applyForm.emit(this.filtersForm.value);
    this.showResetButton = true;
  }

  public resetFilters(): void {
    this.resetForm.emit();
    this.showResetButton = false;
  }

  public initForm(): void {
    this.filtersForm = new FormGroup({
      genres: new FormControl([]),
      prices: new FormGroup({
        minPrice: new FormControl('', [
          Validators.min(0),
        ]),
        maxPrice: new FormControl('', [
          Validators.min(0),
        ]),
      },
      MyValidator.priceValidation,
      ),
      releases: new FormGroup({
        releaseDateFrom: new FormControl(''),
        releaseDateTo: new FormControl(''),
      },
      MyValidator.releaseValidation,
      ),
    },
    MyValidator.emptyFormValidation,
    );
  }

}
