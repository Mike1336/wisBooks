import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { IGenre } from '../../interfaces/genre';
import { FiltersValidator } from '../../validators/filters.validator';

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
  selector: 'filters-component',
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
export class FiltersComponent implements OnInit {

  public filtersForm: FormGroup;


  @Input()
  public genres: IGenre[];

  @Input()
  public sbStatus: boolean;

  @Output()
  public applyForm: EventEmitter<object> = new EventEmitter();

  @Output()
  public resetForm: EventEmitter<object> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
    this.initForm();
  }

  public applyFilters(): void {
    this.applyForm.emit(this.filtersForm.value);
  }

  public resetFilters(): void {
    this.filtersForm.reset();
    this.resetForm.emit();
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
      FiltersValidator.priceValidation,
      ),
      releases: new FormGroup({
        releaseDateFrom: new FormControl(''),
        releaseDateTo: new FormControl(''),
      },
      FiltersValidator.releaseValidation,
      ),
    },
    FiltersValidator.emptyFormValidation,
    );
  }

}
