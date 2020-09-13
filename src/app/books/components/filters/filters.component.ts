import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { IGenre } from '../../interfaces/genre';


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
      this.validPrice
      ),
      releases: new FormGroup({
        releaseFrom: new FormControl(''),
        releaseTo: new FormControl(''),  
      },
      this.validRelease
      )
    });
  }

  public applyFilters(): void {
    this.filtersForm.value.releaseFrom = this.datePipe.transform(
      this.filtersForm.value.releaseFrom, 'yyyy-MM-dd',
      );
    this.filtersForm.value.releaseTo = this.datePipe.transform(
      this.filtersForm.value.releaseTo, 'yyyy-MM-dd',
      );
    this.applyForm.emit(this.filtersForm.value);
    this.showResetButton = true;
  }

  public resetFilters(): void {
    this.resetForm.emit();
    this.showResetButton = false;
  }

  private validPrice(priceGroup: FormGroup): {[key: string]: boolean} {
    if (priceGroup.get('minPrice').value > 0 &&
        priceGroup.get('maxPrice').value > 0) {
        if (priceGroup.get('minPrice').value > priceGroup.get('maxPrice').value) {
          priceGroup.get('minPrice').setErrors({
            minMaxPriceError: true,
          })
          return { minMaxPriceError: true, }
        } else {
          priceGroup.get('minPrice').reset();
          return null;
        }
    }
  }
  private validRelease(releaseFroup: FormGroup): {[key: string]: boolean} {
    if (releaseFroup.get('releaseFrom').value &&
        releaseFroup.get('releaseTo').value) {
        if (releaseFroup.get('releaseFrom').value > releaseFroup.get('releaseTo').value) {
          releaseFroup.get('releaseFrom').setErrors({
            fromToReleaseError: true,
          })
          return { fromToReleaseError: true, }
        } else {
          releaseFroup.get('releaseFrom').reset();
          return null;
        }
    }
  }
  
}
