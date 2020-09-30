import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.view.html',
  styleUrls: ['./register.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegisterView implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
