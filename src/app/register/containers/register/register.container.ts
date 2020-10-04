import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
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
export class RegisterContainer implements OnInit, AfterViewInit {

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
  }
  
  public ngAfterViewInit(): void {
    this.firstFormGroup = this.firstStep.form;
    this.secondFormGroup = this.secondtStep.form;
    this.thirdFormGroup = this.thirdStep.form;
  }
  public registre(): void {
    console.log({
      ...this.firstStep.form.value,
      ...this.secondtStep.form.value,
      ...this.thirdStep.form.value,
    });
  }

}
