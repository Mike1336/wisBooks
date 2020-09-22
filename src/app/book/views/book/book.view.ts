import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

@Component({
  templateUrl: './book.view.html',
  styleUrls: ['./book.view.scss'],
})
export class BookView implements OnInit {

  public queryId$: Observable<number>;

  constructor(private route: ActivatedRoute, private router: Router) { }

  public ngOnInit(): void {
    this.queryId$ = this.route.params.pipe(
      pluck('id'),
    );
  }

  public show404(): void {
    this.router.navigate(['/404'], { skipLocationChange: true });
  }

}
