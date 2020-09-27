import { Component, OnInit, ViewChild, Input } from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

import { Observable } from 'rxjs';

import { IAuthor } from './../../interfaces/author';
import {Title} from '@angular/platform-browser';


@Component({
  selector: 'authors-component',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss'],
})
export class AuthorsComponent implements OnInit {


  public displayedColumns: string[] = ['id', 'first_name', 'last_name'];
  public dataSource = new MatTableDataSource();
  public authorsQuantity: number;

  public authors$: Observable<IAuthor[]>;

  @Input()
  public authors: IAuthor[];

  @ViewChild(MatSort)
  public sort: MatSort;

  constructor(private _title: Title) { }

  public ngOnInit(): void {
    this._title.setTitle('All authors');
    this.dataSource.data = this.authors;
  }

  /**
   * Takes in a paginator and set to dataSource
   *
   * @param paginator The MatPaginator object from own component
   */
  public takePaginator(paginator: MatPaginator): void {
    this.dataSource.paginator = paginator;
  }


}
