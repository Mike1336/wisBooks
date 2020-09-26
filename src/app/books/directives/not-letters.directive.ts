import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[notLetters]',
})
export class NotLettersDirective implements OnInit, OnDestroy{

  private _control: AbstractControl;
  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  @Input()
  set control(control: AbstractControl) {
    this._control = control;
  }

  constructor() { }

  public ngOnInit(): void {
    this._control?.valueChanges
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        (data) => {
          this._control.setValue(data.replace(/\D/, ''), { emitEvent: false });
        },
      );
  }

  public ngOnDestroy() : void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
