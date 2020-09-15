import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  private navSbOpened$ = new BehaviorSubject(false);
  private filSbOpened$ = new BehaviorSubject(false);

  constructor() { }

  public get navSbOpen$(): Observable<boolean> {
    return this.navSbOpened$;
  }
  public get filSbOpen$(): Observable<boolean> {
    return this.filSbOpened$;
  }
  public changeNavSb(bol: boolean): void {
    this.navSbOpened$.next(bol);
  }
  public changeFilSb(bol: boolean): void {
    console.log(bol)
    this.filSbOpened$.next(bol);
  }}
