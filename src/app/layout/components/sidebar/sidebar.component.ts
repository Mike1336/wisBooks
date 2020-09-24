import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

import { MatDrawer } from '@angular/material/sidenav';

import { SidebarService } from './../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChild(MatDrawer) public drawer: MatDrawer;

  constructor(private sidebar: SidebarService) {

  }
  public ngOnInit(): void {
  }
  public ngAfterViewInit(): void {
    this.sidebar.navSbOpen$.subscribe((data) => {
      if (data) {
        this.drawer.open();

      } else {
        this.drawer.close();
      }
    });
  }

}