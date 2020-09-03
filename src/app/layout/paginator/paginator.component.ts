import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements AfterViewInit {

  @ViewChild(MatPaginator)
  public paginator: MatPaginator;

  @Input()
  public maxLength: number = 0;

  @Output()
  public OnCreate: EventEmitter<MatPaginator> = new EventEmitter();

  constructor() { }

  public ngAfterViewInit(): void {
    this.OnCreate.emit(this.paginator);
  }
}
