import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() public burgerClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  public ngOnInit(): void {
  }
  public showSideBar(): void {
    this.burgerClicked.emit();
  }
}
