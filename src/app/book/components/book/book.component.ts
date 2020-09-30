import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { IBook } from './../../../books/interfaces/book';

@Component({
  selector: 'book-component',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookComponent implements OnInit {

  @Input()
  public book: IBook;

  constructor(private _title: Title) { }

  public ngOnInit(): void {
    this._title.setTitle(`${this.book.title} | Book details`);
  }

}
