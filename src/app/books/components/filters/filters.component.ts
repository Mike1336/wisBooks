import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

import { IGenre } from '../../interfaces/genre';
import { FiltersValidator } from '../../validators/filters.validator';

@Component({
  selector: 'filters-component',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FiltersComponent implements OnInit {

  @Input()
  public genres: IGenre[];

  @Input()
  public sbStatus: boolean;

  @Output()
  public applyForm: EventEmitter<object> = new EventEmitter();

  @Output()
  public resetForm: EventEmitter<object> = new EventEmitter();

  public filtersForm: FormGroup;

  constructor() {}

  public get minPrice(): AbstractControl {
    return this.filtersForm.get('prices').get('minPrice');
  }

  public get maxPrice(): AbstractControl {
    return this.filtersForm.get('prices').get('maxPrice');
  }

  public get releaseDateFrom(): AbstractControl {
    return this.filtersForm.get('releases').get('releaseDateFrom');
  }

  public get releaseDateTo(): AbstractControl {
    return this.filtersForm.get('releases').get('releaseDateTo');
  }

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
    this.filtersForm = new FormGroup(
      {
        genres: new FormControl([]),
        prices: new FormGroup(
          {
            minPrice: new FormControl(''),
            maxPrice: new FormControl(''),
          },
          [FiltersValidator.priceValidation],
        ),
        releases: new FormGroup(
          {
            releaseDateFrom: new FormControl(''),
            releaseDateTo: new FormControl(''),
          },
          [FiltersValidator.releaseValidation],
        ),
      },
      [FiltersValidator.emptyFormValidation],
    );
  }

}
