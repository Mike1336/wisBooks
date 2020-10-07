import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstStepComponent implements OnInit {

  @Input()
  public form: FormGroup;

  public firstNameCtl: AbstractControl;
  public lastNameCtl: AbstractControl;
  public emailCtl: AbstractControl;
  public phoneNumberCtl: AbstractControl;

  constructor() { }

  public ngOnInit(): void {
    this.firstNameCtl = new FormControl('', [
      Validators.required,
    ]);
    this.lastNameCtl = new FormControl('', [
      Validators.required,
    ]);
    this.emailCtl = new FormControl('', [
      Validators.email,
      Validators.required,
    ]);
    this.phoneNumberCtl = new FormControl('', [
      Validators.minLength(17),
      Validators.required,
    ]);

    this.form.setControl('firstName', this.firstNameCtl);
    this.form.setControl('lastName', this.lastNameCtl);
    this.form.setControl('email', this.emailCtl);
    this.form.setControl('phoneNumber', this.phoneNumberCtl);
  }

}
