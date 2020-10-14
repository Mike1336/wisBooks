import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject, Observable } from 'rxjs';
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

  public loginLoading$: Observable<boolean>;
  public formError = '';

  @ViewChild(AuthComponent)
  public component: AuthComponent;

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    public auth: AuthService,
    private _router: Router,
  ) { }

  public ngOnInit(): void {
    this.loginLoading$ = this.auth.loginLoading$;
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public login(user: IUser): void {
    this.auth.changeLoadingStatus(true);

    this.auth.login(user)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        // tslint:disable-next-line: rxjs-prefer-observer
        () => {
          this.auth.changeLoadingStatus(false);
          this.component.loginForm.reset();
          this._router.navigate(['/books']);
        },
        // tslint:disable-next-line: rxjs-prefer-observer
        (error) => {
          const errMessage = error.error.error.message;
          if (errMessage === 'EMAIL_NOT_FOUND' || errMessage === 'INVALID_PASSWORD') {
            this.formError = 'Incorrect login or password';
          }
          setTimeout(() => {
            this.auth.changeLoadingStatus(false);
          }, 1000);
        },
      );
  }

}
