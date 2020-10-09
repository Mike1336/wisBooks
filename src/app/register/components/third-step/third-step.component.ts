import { Component, OnInit, Output, EventEmitter, Input, ChangeDetectionStrategy } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'third-step',
  templateUrl: './third-step.component.html',
  styleUrls: ['./third-step.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThirdStepComponent implements OnInit {

  @Input()
  public form: FormGroup;

  @Output()
  public clickRegister = new EventEmitter();

  constructor() { }

  public ngOnInit(): void {
  }

  public formLog(): void {
    this.clickRegister.emit();
  }

}
