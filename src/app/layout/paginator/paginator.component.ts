import { Component, Input, Output, EventEmitter, ViewChild, AfterViewInit, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @ViewChild(MatPaginator, {static: true})
  public paginator: MatPaginator;

  @Input()
  public maxLength: number = 0;

  @Input()
  public itemsPerPage: number[] = [];

  @Output()
  public create: EventEmitter<MatPaginator> = new EventEmitter();

  @Output()
  public changeSize: EventEmitter<MatPaginator> = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
    this.create.emit(this.paginator);
  }
  public changedSize(page): void {
    this.changeSize.emit(page.pageSize);
  }
}
