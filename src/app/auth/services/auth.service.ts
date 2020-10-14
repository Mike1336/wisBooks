import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { IFbResponse } from './../interfaces/fb-response';
import { IUser } from './../interfaces/user';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _loginLoading$ = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient) { }

  public get loginLoading$() : Observable<boolean> {
    return this._loginLoading$.asObservable();
  }

  public changeLoadingStatus(data: boolean): void {
    this._loginLoading$.next(data);
  }

  public get token(): string {
    const now = +(new Date().getTime);
    const expDate = +(new Date(localStorage.getItem('fb-token-exp')).getTime);

    if (now > expDate) {
      this.logout();

      return null;
    }

    return localStorage.getItem('fb-token');
  }

  public login(user: IUser): Observable<any> {
    user.returnSecureToken = true;

    return this._http.post(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
        environment.apiKey
      }`, user)
      .pipe(
        tap(this._setToken),
      );
  }

  public logout(): void {
    this._setToken(null);
  }

  public isAuth(): boolean {
    return !!this.token;
  }

  private _setToken(response: IFbResponse | null): void {
    if (response) {
      const now = new Date().getTime();
      const expDate = new Date(now + (+response.expiresIn * 1000));

      localStorage.setItem('fb-token', response.idToken);
      localStorage.setItem('fb-token-exp', expDate.toString());
    } else {
      localStorage.clear();
    }
  }

}
