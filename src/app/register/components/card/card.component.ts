import { ChangeDetectorRef, Component, Input, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, AbstractControl, FormControl, Validators } from '@angular/forms';

import { ReplaySubject } from 'rxjs';
import { map, debounceTime, mergeMap, takeUntil } from 'rxjs/operators';

import { RegisterValidator } from './../../validators/pass.validator';
import { BankService } from './../../services/bank.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit, OnDestroy {

  @Input()
  public form: FormGroup;

  public cardNumberCtl: AbstractControl;
  public cardMonthCtl: AbstractControl;
  public cardYearCtl: AbstractControl;
  public cardCVVCtl: AbstractControl;

  public cardBgColor: string = '';
  public bankLogoSrc: string = '';
  public paySysLogoSrc: string = '';

  private _destroy$: ReplaySubject<number> = new ReplaySubject(1);

  constructor(private _bank: BankService, private _cdRef: ChangeDetectorRef) { }

  public get cardNumber(): AbstractControl {
    return this.form.get('cardNumber');
  }
  public get cardYear(): AbstractControl {
    return this.form.get('cardYear');
  }
  public get cardMonth(): AbstractControl {
    return this.form.get('cardMonth');
  }
  public get cardCVV(): AbstractControl {
    return this.form.get('cardCVV');
  }

  public ngOnInit(): void {
    this.cardNumberCtl = new FormControl('', [
      Validators.minLength(19),
      Validators.required,
    ]);
    this.cardMonthCtl = new FormControl('', [
      Validators.minLength(2),
      Validators.max(12),
      Validators.required,
    ]);
    this.cardYearCtl = new FormControl('', [
      Validators.minLength(2),
      Validators.required,
    ]);
    this.cardCVVCtl = new FormControl('', [
      Validators.minLength(3),
      Validators.required,
    ]);

    this.form.setControl('cardNumber', this.cardNumberCtl);
    this.form.setControl('cardMonth', this.cardMonthCtl);
    this.form.setControl('cardYear', this.cardYearCtl);
    this.form.setControl('cardCVV', this.cardCVVCtl);
    this.form.setValidators([
      RegisterValidator.cardDateValidation,
    ]);

    this.cardNumber.valueChanges
      .pipe(
        map((data: string) => data.replace(' ', '')),
        mergeMap((data: string) => {
          if (data.length >= 6) {
            return this._bank.getCardInfo(data.slice(0, 6));
          }

          return this.cardNumber.valueChanges;
        }),
        debounceTime(500),
        takeUntil(this._destroy$),
      )
      .subscribe(
        (data: any) => {
          data.bankColor
          ? this.cardBgColor = data.bankColor
          : this.cardBgColor = '';

          data.formBankLogoBigSvg
          ? this.bankLogoSrc = data.formBankLogoBigSvg
          : this.bankLogoSrc = '';

          data.brandLogoOriginalSvg
          ? this.paySysLogoSrc = data.brandLogoOriginalSvg
          : this.paySysLogoSrc = '';
        });
  }

  public ngOnDestroy(): void {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

}
