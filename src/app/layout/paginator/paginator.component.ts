import { Component, Input, Output, EventEmitter, ViewChild, OnInit } from '@angular/core';

import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @ViewChild(MatPaginator, { static: true })
  public paginator: MatPaginator;

  @Input()
  public records: number = 0;

  @Input()
  public limits: number[] = [];

  @Output()
  public create: EventEmitter<MatPaginator> = new EventEmitter();

  @Output()
  public changed: EventEmitter<IPaginatorData> = new EventEmitter();

  public pagData: IPaginatorData;

  constructor() { }

  public ngOnInit(): void {
    this.create.emit(this.paginator);
  }
  public changedSize(page): void {
    this.pagData = {
      paginator: this.paginator,
      pageSize: page.pageSize,
      pageIndex: page.pageIndex,
      length: page.length,
    };

    this.changed.emit(this.pagData);
  }
  public moveToFirstPage(): void {
    this.paginator.firstPage();
  }

}
export interface IPaginatorData {
  paginator: MatPaginator;
  pageSize: number;
  pageIndex: number;
  length: number;
}
