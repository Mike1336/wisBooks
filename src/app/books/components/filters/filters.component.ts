import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

  constructor() { }

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
    this.applyForm.emit(this.filtersForm.value);
  }

  public lol(date) {
    console.log(date);
  }

}
