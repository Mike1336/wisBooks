import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Input()
  public isBooksPage: boolean;

  @Output()
  public burgerClicked: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public filtersClicked: EventEmitter<any> = new EventEmitter<any>();

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor() {}

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public showSideBar(): void {
    this.burgerClicked.emit();
  }

  public showBooksFilters(): void {
    this.filtersClicked.emit();
  }

}
