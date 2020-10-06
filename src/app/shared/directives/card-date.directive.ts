import { Directive, OnDestroy, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[cardDateMask]',
})
export class CardDateMaskDirective implements OnInit, OnDestroy {

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _control: NgControl) {
  }

  public ngOnInit(): void {
    const control = this._control.control;
    control.valueChanges
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        (data) => {
          let newVal = data.replace(/\D/g, '');
          newVal = data.replace(/(^[1-9]{1})([3-9]{1})/, '$1');

          newVal.length === 0
            ? newVal = ''
            : newVal = newVal.replace(/^(\d{2})(\d{1,2})/, '$1/$2');

          control.setValue(newVal, { emitEvent: false });
        },
      );
  }

  public ngOnDestroy() : void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
