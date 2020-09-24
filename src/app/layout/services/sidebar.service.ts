import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  private _navSbStatus$ = new BehaviorSubject(false);
  private _filSbStatus$ = new BehaviorSubject(false);

  constructor() { }

  public get navSbStatus$(): Observable<boolean> {
    return this._navSbStatus$;
  }
  public get filSbStatus$(): Observable<boolean> {
    return this._filSbStatus$;
  }
  public changeNavSb(bol: boolean): void {
    this._navSbStatus$.next(bol);
  }
  public changeFilSb(bol: boolean): void {
    this._filSbStatus$.next(bol);
  }

}
