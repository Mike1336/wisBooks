import { Directive, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[cardNumberMask]',
})
export class CardNumberMaskDirective implements OnInit, OnDestroy {

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
          let newVal = data.replace(/\D/g, '');

          if (newVal.length === 0) {
            newVal = '';
          } else if (newVal.length > 4 && newVal.length <= 8) {
            newVal = newVal.replace(/^(\d{0,4})/, '$1 ');
          } else if (newVal.length > 8 && newVal.length <= 12) {
            newVal = newVal.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})/, '$1 $2 $3');
          } else if (newVal.length > 12) {
            newVal = newVal.replace(/^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})(.*)/, '$1 $2 $3 $4');
          }

          control.setValue(newVal, { emitEvent: false });
        },
      );
  }

  public ngOnDestroy() : void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
