import { Directive, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[notLetters]',
})
export class NotLettersDirective implements OnInit, OnDestroy{

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _control: NgControl) { }

  public ngOnInit(): void {
    const control = this._control.control;
    control.valueChanges
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        (data) => {
          control.setValue(data.replace(/\D/, ''), { emitEvent: false });
        },
      );
  }

  public ngOnDestroy() : void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
