import { Component } from '@angular/core';

import { SidebarService } from './layout/services/sidebar.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  public showNavSideBar: boolean = false;

  constructor(private sbService: SidebarService) {

  }
  public showNav(): void {
    console.log('q')
    this.showNavSideBar = !this.showNavSideBar;
    this.sbService.changeNavSb(this.showNavSideBar);
  }
}
