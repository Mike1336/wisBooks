import { ChangeDetectionStrategy, Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Input()
  public isAuth: boolean;

  @Output()
  public edit = new EventEmitter<never>();

  @Output()
  public delete = new EventEmitter<never>();

  constructor(private _title: Title) { }

  public ngOnInit(): void {
    this._title.setTitle(`${this.book.title} | Book details`);
  }

  public emitEdit(): void {
    this.edit.emit();
  }

  public emitDelete(): void {
    this.delete.emit();
  }

}
