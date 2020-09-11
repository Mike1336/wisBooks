import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';
import { DatePipe } from '@angular/common';

import { IGenre } from '../../interfaces/genre';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  public filtersForm: FormGroup;

  @Input()
  public genres: IGenre[];
  @Output()
  public applyForm: EventEmitter<object> = new EventEmitter();

  constructor(private datePipe: DatePipe) { }

  public ngOnInit(): void {
    this.filtersForm = new FormGroup({
      genres: new FormControl([]),
      minPrice: new FormControl(''),
      maxPrice: new FormControl(''),
      releaseFrom: new FormControl(''),
      releaseTo: new FormControl(''),
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
  }

  public lol(date) {
  }

  private passEqual() {
    return (group: FormGroup) => {
      return (!group.dirty || !group.touched) ||
              group.get('minPrice').value < group.get('maxPrice').value ?
                 null :
                 { custom: 'пароли не совпадают' };
    }
  }

}
