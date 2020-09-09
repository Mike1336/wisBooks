import { Component, OnInit, Input } from '@angular/core';

import { IGenre } from '../../interfaces/genre';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {

  @Input() public genres: IGenre[];

  constructor() { }

  public ngOnInit(): void {
  }

}
