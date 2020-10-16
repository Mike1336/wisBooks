import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  OnDestroy,
  ChangeDetectionStrategy,
} from '@angular/core';

import { ReplaySubject } from 'rxjs';

import { AuthService } from './../../../auth/services/auth.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {

  @Output()
  public logout: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  public burgerClicked: EventEmitter<any> = new EventEmitter<any>();

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(public auth: AuthService) {}

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public showSideBar(): void {
    this.burgerClicked.emit();
  }

  public logoutEmit(): void {
    this.logout.emit();
    this.auth.logout();
  }

}
