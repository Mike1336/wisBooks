import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FirstStepComponent } from '../../components/first-step/first-step.component';
import { SecondStepComponent } from '../../components/second-step/second-step.component';
import { ThirdStepComponent } from '../../components/third-step/third-step.component';

@Component({
  selector: 'register-container',
  templateUrl: './register.container.html',
  styleUrls: ['./register.container.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterContainer implements OnInit {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  @ViewChild(FirstStepComponent)
  public firstStep: FirstStepComponent;

  @ViewChild(SecondStepComponent)
  public secondtStep: SecondStepComponent;

  @ViewChild(ThirdStepComponent)
  public thirdStep: ThirdStepComponent;

  constructor() { }

  public ngOnInit(): void {
    this.firstFormGroup = new FormGroup({
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

  public registre(): void {
    console.log({
      ...this.firstStep.firstFormGroup.value,
      ...this.secondtStep.secondFormGroup.value,
      ...this.thirdStep.thirdFormGroup.value,
    });
  }

}
