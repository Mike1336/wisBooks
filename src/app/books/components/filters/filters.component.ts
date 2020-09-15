import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

import { IGenre } from '../../interfaces/genre';

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
export class FiltersComponent implements OnInit {

  public filtersForm: FormGroup;
  public showResetButton: boolean;

  @Input()
  public genres: IGenre[];
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
        releaseFrom: new FormControl(''),
        releaseTo: new FormControl(''),
      },
      MyValidator.releaseValidation,
      ),
    });
  }

}

// public toRansack(filters)

// filters = {
//   cock: 1,
//   genres: [1,2,3],
//   releaseDate: '10-10-2010',
// };

// toRansack(filters, {
//   genres: Ransack.In,
//   releaseDate: Ransack.Gt,
// })


// => {
//   cock: 1,
//   genres_in: [1,2,3],
//   releaseDate_gt: '10-10-2010',
// }
