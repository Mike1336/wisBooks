import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

import { IFbResponse } from './../interfaces/fb-response';
import { IUser } from './../interfaces/user';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private _submit$ = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient) { }

  public get submit$() : Observable<boolean> {
    return this._submit$.asObservable();
  }

  public nextToSubmit(data: boolean): void {
    this._submit$.next(data);
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

    return this._http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this._setToken),
        catchError(this._handleError.bind(true)),
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

  private _handleError(error: HttpErrorResponse): Observable<never> {
    const { message } = error.error.error;

    // switch (message) {
    //   case 'EMAIL_NOT_FOUND':
    //     this._loginErrors$.next({ email: 'Email not found' });
    //     break;

    //   case 'INVALID_PASSWORD':
    //     this._loginErrors$.next({ password: 'Invalid password' });
    //     break;
    // }
    console.log(message);

    return throwError(error);
  }

}
