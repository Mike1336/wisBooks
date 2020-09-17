import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatDrawer } from '@angular/material/sidenav';

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
    // `MomentDateAdapter` can be automatically provided by importing `MomentDateModule` in your
    // application's root module. We provide it at the component level here, due to limitations of
    // our example generation script.
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class FiltersComponent implements OnInit, AfterViewInit {

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

  constructor(private sidebar: SidebarService) { }

  public ngOnInit(): void {
    this.initForm();
  }
  public ngAfterViewInit(): void {
    this.sidebar.filSbOpen$.subscribe((data) => {
      if (data) {
        this.drawer.open();
      } else {
        this.drawer.close();
      }
    });
  }

  public applyFilters(): void {
    if (this.filtersForm.value['releases']['release_date_gt']) {
      this.filtersForm.value['releases']['release_date_gt'] = this.filtersForm.value['releases']['release_date_gt']._i;
    }
    if (this.filtersForm.value['releases']['release_date_lt']) {
      this.filtersForm.value['releases']['release_date_lt'] = this.filtersForm.value['releases']['release_date_lt']._i;
    }

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
        price_gt: new FormControl('', [
          Validators.min(0),
        ]),
        price_lt: new FormControl('', [
          Validators.min(0),
        ]),
      },
      MyValidator.priceValidation,
      ),
      releases: new FormGroup({
        release_date_gt: new FormControl(''),
        release_date_lt: new FormControl(''),
      },
      MyValidator.releaseValidation,
      ),
    },
    MyValidator.emptyFormValidation,
    );
  }

}
