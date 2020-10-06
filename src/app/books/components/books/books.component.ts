import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { IBook } from '../../interfaces/book';

import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'books-component',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksComponent implements OnInit {

  public emptyBooks = [];

  @Input()
  public books: IBook[];

  @Output()
  public editClicked: EventEmitter<IBook> = new EventEmitter();

  @Output()
  public deleteClicked: EventEmitter<IBook> = new EventEmitter();

  constructor(private _title: Title, public auth: AuthService) {
  }

  public ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      this.emptyBooks.push({});
    }
    this._title.setTitle('All books');
  }

}
