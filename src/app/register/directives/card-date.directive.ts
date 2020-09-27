import { Directive, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[cardDateMask]',
})
export class CardDateMaskDirective implements OnInit, OnDestroy {

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
          let newVal = data.replace(/\D/g, '');
          newVal = data.replace(/(^[13-99]{2})/, '');

          newVal.length === 0
            ? newVal = ''
            : newVal = newVal.replace(/^(\d{2})(\d{1,2})/, '$1/$2');

          this._control.setValue(newVal, { emitEvent: false });
        },
      );
  }

  public ngOnDestroy() : void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
