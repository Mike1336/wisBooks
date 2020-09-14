import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { IGenre } from '../../interfaces/genre';

import { MyValidator } from './../../validators/my.validator';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
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

  constructor(private datePipe: DatePipe) { }

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
