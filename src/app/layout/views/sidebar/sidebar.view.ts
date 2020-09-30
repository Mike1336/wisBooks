import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'sidebar-view',
  templateUrl: './sidebar.view.html',
  styleUrls: ['./sidebar.view.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarView implements OnInit {

  constructor() { }

  public ngOnInit(): void {
  }

}
