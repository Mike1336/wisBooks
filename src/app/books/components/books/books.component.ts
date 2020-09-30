import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { IBook } from '../../interfaces/book';

@Component({
  selector: 'books-component',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {

  @Input()
  public books: IBook[];

  constructor(private _title: Title) {
  }

  public ngOnInit(): void {
    this._title.setTitle('All books');
  }

}
