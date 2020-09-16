import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { SidebarService } from './../services/sidebar.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  public booksPageIcon: boolean;
  public filtersDrawer: boolean;

  @Output()
  public burgerClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  public filtersClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor(private route: Router, private sbService: SidebarService) { }

  public ngOnInit(): void {
    if (this.route.url === '/') {
      this.booksPageIcon = true;
    } else {
      this.booksPageIcon = false;
    }
  }
  public showSideBar(): void {
    this.burgerClicked.emit();
  }
  public showBooksFilters(): void {
    this.filtersDrawer = !this.filtersDrawer;
    this.sbService.changeFilSb(this.filtersDrawer);
  }

}
