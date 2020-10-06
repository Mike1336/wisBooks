import { Directive, OnDestroy, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[dateMask]',
})
export class DateMaskDirective implements OnInit, OnDestroy {

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(
    private _control: NgControl,
    private _element: ElementRef,
    private _renderer: Renderer2,
    ) { }

  public ngOnInit(): void {
    const control = this._control.control;
    control.valueChanges
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(
        () => {
          const dateInput = this._element.nativeElement.value;
          let newVal = dateInput.replace(/\D/g, '');

          if (newVal.length === 0) {
            newVal = '';
          } else if (newVal.length < 5) {
            newVal = newVal.replace(/^(\d{0,4})/, '$1');
          } else if (newVal.length >= 5 && newVal.length < 7) {
            newVal = newVal.replace(/^(\d{0,4})(\d{0,2})/, '$1-$2');
          } else if (newVal.length >= 7) {
            newVal = newVal.replace(/^(\d{0,4})(\d{0,2})(\d{0,2})/, '$1-$2-$3');
          }

          this._renderer.setProperty(this._element.nativeElement, 'value', newVal);
        },
      );
  }

  public ngOnDestroy() : void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
