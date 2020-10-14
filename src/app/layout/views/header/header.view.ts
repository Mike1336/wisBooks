import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'header-view',
  templateUrl: './header.view.html',
  styleUrls: ['./header.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderView implements OnInit {

  constructor(private router: Router) { }

  public ngOnInit(): void {
  }

  public goToLogin(): void {
    this.router.navigate(['/login']);
  }

}
