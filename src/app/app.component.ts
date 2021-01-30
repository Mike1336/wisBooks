import { Component } from '@angular/core';
import {animate, group, query, style, transition, trigger} from "@angular/animations";
import {RouterOutlet} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%', opacity: 1 })),
        group([
          query(':enter', [
            style({ opacity: 0 }),
            animate('250ms ease-in-out', style({ opacity: 1 }))
          ]),
          query(':leave', [
            style({ opacity: 1 }),
            animate('250ms ease-in-out', style({ opacity: 0 }))]),
        ])
      ])
    ])
  ]
})
export class AppComponent {

  constructor() {

  }

  public prepareRoute(outlet: RouterOutlet): void {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.page;
  }
}
