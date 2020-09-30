import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.view.html',
  styleUrls: ['./books.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksView implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
