import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {

  private sbOpened$ = new BehaviorSubject(false);

  constructor() { }

  public get sbOpen$(): Observable<boolean> {
    return this.sbOpened$;
  }
  public change(bol: boolean): void {
    this.sbOpened$.next(bol);
  }
}
