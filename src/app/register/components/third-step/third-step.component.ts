import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdStepComponent implements OnInit {

  @Input()
  public form: FormGroup;

  public cardNumberCtl: AbstractControl;
  public cardMonthCtl: AbstractControl;
  public cardYearCtl: AbstractControl;
  public cardCVVCtl: AbstractControl;

  @Output()
  public clickRegister = new EventEmitter();

  constructor() { }

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
  }

  public onSubmit(): void {
    this.clickRegister.emit();
  }

}
