import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.view.html',
  styleUrls: ['./books.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BooksView implements OnInit {

  public pageFromRoute$: Observable<string>;

  constructor(private route: ActivatedRoute) { }

  public ngOnInit(): void {
    this.pageFromRoute$ = this.route.params
      .pipe(
        map((params) => {
          return params.page ?? params;
        }));
  }

}
