import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { IUser } from './../interfaces/user';
import { environment } from './../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  constructor(private _http: HttpClient) { }

  public get token(): string {
    return '';
  }

  public login(user: IUser): Observable<any> {
    console.log(user)
    return this._http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
      );
  }

  public logout(): void {
    
  }

  public isAuth(): boolean {
    return !!this.token;
  }

  private setToken(response): void {
    console.log(response);
  }

}
