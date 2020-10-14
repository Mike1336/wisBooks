import { Component, OnInit, ViewChild, Input, ChangeDetectionStrategy, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { IAuthor } from './../../interfaces/author';


@Component({
  selector: 'authors-component',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorsComponent implements OnInit, AfterViewInit {


  public displayedColumns: string[] = ['id', 'first_name', 'last_name'];
  public dataSource = new MatTableDataSource();

  @Input()
  public authors: IAuthor[];

  @ViewChild(MatSort)
  public sort: MatSort;

  constructor(private _title: Title) { }

  public ngOnInit(): void {
    this._title.setTitle('All authors');
    this.dataSource.data = this.authors;
  }
  public ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }
  /**
   * Takes in a paginator and set to dataSource
   *
   * @param paginator The MatPaginator object from own component
   */
  public takePaginator(paginator: MatPaginator): void {
    this.dataSource.paginator = paginator;
  }
  public applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
