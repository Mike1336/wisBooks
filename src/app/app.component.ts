import { Component } from '@angular/core';

import { SidebarService } from './layout/services/sidebar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public showSideBar: boolean = false;

  constructor(private sbService: SidebarService) {

  }
  public show(): void {
    this.showSideBar = !this.showSideBar;
    this.sbService.change(this.showSideBar);
  }

}
