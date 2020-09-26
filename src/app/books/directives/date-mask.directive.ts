import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[dateMask]',
})
export class DateMaskDirective implements OnInit, OnDestroy {

  private _control: AbstractControl;
  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  @Input()
  set control(control: AbstractControl) {
    this._control = control;
  }

  constructor() { }

  public ngOnInit(): void {
    this._control.valueChanges
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        (data) => {
          if (data) {
            let newVal = (data._i).replace(/\D/, '');
            if (newVal.length === 0) {
              newVal = '';
            } else if (newVal.length > 4 && newVal.length <= 6) {
              newVal = newVal.replace(/^(\d{0,4})/, '$1-');
            } else if (newVal.length > 6) {
              newVal = newVal.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})/, '$1-$2-$3');
            }
            this._control.setValue(newVal, { emitEvent: false });
          }
        },
      );
  }

  public ngOnDestroy() : void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
