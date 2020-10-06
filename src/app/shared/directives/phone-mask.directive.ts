import { Directive, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[phoneMask]',
})
export class PhoneMaskDirective implements OnInit, OnDestroy {

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _control: NgControl) {
  }

  public ngOnInit(): void {
    this.phoneValidate();
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  public phoneValidate(): void {
    const control = this._control.control;
    control.valueChanges
      .pipe(
      takeUntil(this._destroy$),
    )
      .subscribe((data) => {
        let newVal = data.replace(/\D/g, '');

        if (newVal.length === 0) {
          newVal = '';
        } else if (newVal.length === 1) {
          newVal = newVal.replace(/^(\d{0,1})/, '+$1');
        } else if (newVal.length <= 4) {
          newVal = newVal.replace(/^(\d{0,1})(\d{0,3})/, '+$1($2');
        } else if (newVal.length <= 7) {
          newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})/, '+$1($2) $3');
        } else if (newVal.length <= 9) {
          newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})/, '+$1($2) $3-$4');
        } else if (newVal.length <= 12){
          newVal = newVal.replace(/^(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/, '+$1($2) $3-$4-$5');
        }

        control.setValue(newVal, { emitEvent: false });
      });
  }

}
