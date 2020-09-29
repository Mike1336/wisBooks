import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { ThirdStepComponent } from './../third-step/third-step.component';
import { SecondStepComponent } from './../second-step/second-step.component';
import { FirstStepComponent } from './../first-step/first-step.component';

@Component({
  selector: 'register-component',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})

export class RegisterComponent implements OnInit {

  public firstFormGroup: FormGroup;
  public secondFormGroup: FormGroup;
  public thirdFormGroup: FormGroup;

  @ViewChild(FirstStepComponent)
  public firstStep: FirstStepComponent;

  @ViewChild(SecondStepComponent)
  public secondtStep: SecondStepComponent;

  @ViewChild(ThirdStepComponent)
  public thirdStep: ThirdStepComponent;

  constructor() {
  }

  public ngOnInit(): void {
  }

  public registre(): void {
    console.log({
      ...this.firstStep.firstFormGroup.value,
      ...this.secondtStep.secondFormGroup.value,
      ...this.thirdStep.thirdFormGroup.value,
    });
  }

}
