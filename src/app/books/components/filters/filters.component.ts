import {
  Component,
  OnInit,
  Input,
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
  public form: FormGroup;

  @Input()
  public genres: IGenre[];

  @Input()
  public sbStatus: boolean;

  public genresCtl: AbstractControl;
  public minPriceCtl: AbstractControl;
  public maxPriceCtl: AbstractControl;
  public releaseFromCtl: AbstractControl;
  public releaseToCtl: AbstractControl;

  constructor() {}

  public ngOnInit(): void {
    this.initForm();
  }

  public initForm(): void {
    this.genresCtl = new FormControl('');
    this.minPriceCtl = new FormControl('');
    this.maxPriceCtl = new FormControl('');
    this.releaseFromCtl = new FormControl('');
    this.releaseToCtl = new FormControl('');

    this.form.setControl('genres', this.genresCtl);
    this.form.setControl('minPrice', this.minPriceCtl);
    this.form.setControl('maxPrice', this.maxPriceCtl);
    this.form.setControl('releaseFrom', this.releaseFromCtl);
    this.form.setControl('releaseTo', this.releaseToCtl);
    this.form.setValidators([
      FiltersValidator.priceValidation,
      FiltersValidator.releaseValidation,
      FiltersValidator.emptyFormValidation,
    ]);
  }

}
