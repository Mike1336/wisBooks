import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { AuthComponent } from '../../components/auth/auth.component';

import { AuthService } from './../../services/auth.service';
import { IUser } from './../../interfaces/user';

@Component({
  selector: 'auth-container',
  templateUrl: './auth.container.html',
  styleUrls: ['./auth.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthContainer implements OnInit, OnDestroy {

  @ViewChild(AuthComponent)
  public component: AuthComponent;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    public auth: AuthService,
    private _router: Router,
    private _cdRef: ChangeDetectorRef,
  ) { }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public login(user: IUser): void {
    this.auth.nextToSubmit(true);

    this.auth.login(user)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        // tslint:disable-next-line: rxjs-prefer-observer
        () => {
          this.auth.nextToSubmit(false);
          this.component.loginForm.reset();
          this._router.navigate(['/books']);
        },
        // tslint:disable-next-line: rxjs-prefer-observer
        (error) => {
          setTimeout(() => {
            this.auth.nextToSubmit(false);
          }, 1000);
        },
      );
  }

}
