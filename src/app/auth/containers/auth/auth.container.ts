import { Component, OnInit, ViewChild, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

import { ReplaySubject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';

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
    private _auth: AuthService,
    private _router: Router,
  ) { }

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public login(user: IUser): void {
    this._auth.login(user)
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(() => {
        this.component.loginForm.reset();
        this._router.navigate(['/books']);
      });
  }

}
