import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import {map, pluck} from 'rxjs/operators';

@Component({
  templateUrl: './book.view.html',
  styleUrls: ['./book.view.scss'],
})
export class BookView {

  public id$ : Observable<number>;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.id$ = this.getIdFromParams();
  }

  public getIdFromParams (): Observable<number> {
    return this.route.params
        .pipe(
            pluck('id'),
            map((id) => +id),
        );
  }

  public show404(): void {
    this.router.navigate(['/404'], { skipLocationChange: true });
  }

}
