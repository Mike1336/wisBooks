import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'first-step',
  templateUrl: './first-step.component.html',
  styleUrls: ['./first-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstStepComponent implements OnInit {

  public form: FormGroup;

  constructor() { }

  public ngOnInit(): void {
    this.form = new FormGroup({
      firstNameCtl: new FormControl('', [
        Validators.required,
      ]),
      lastNameCtl: new FormControl('', [
        Validators.required,
      ]),
      emailCtl: new FormControl('', [
        Validators.email,
        Validators.required,
      ]),
      phoneNumberCtl: new FormControl('', [
        Validators.minLength(17),
        Validators.required,
      ]),
    });
  }

  public get firstName(): AbstractControl {
    return this.form.get('firstNameCtl');
  }

  public get lastName(): AbstractControl {
    return this.form.get('lastNameCtl');
  }

  public get email(): AbstractControl {
    return this.form.get('emailCtl');
  }

  public get phoneNumber(): AbstractControl {
    return this.form.get('phoneNumberCtl');
  }


}
