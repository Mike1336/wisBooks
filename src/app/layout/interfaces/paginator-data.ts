import { MatPaginator } from '@angular/material/paginator';

export interface IPaginatorData {
  paginator: MatPaginator;
  pageSize: number;
  pageIndex: number;
  length: number;
}