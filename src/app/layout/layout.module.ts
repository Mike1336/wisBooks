import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from './../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderContainer } from './containers/header/header.container';
import { HeaderView } from './views/header/header.view';
import { SidebarContainer } from './containers/sidebar/sidebar.container';
import { SidebarView } from './views/sidebar/sidebar.view';
import { SearchContainer } from './containers/search/search.container';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderContainer,
    HeaderView,
    SidebarComponent,
    SidebarContainer,
    SidebarView,
    PaginatorComponent,
    SearchContainer,
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // Own
    SharedModule,
  ],
  exports: [
    SidebarView,
    PaginatorComponent,
    HeaderView,
  ],
})
export class LayoutModule { }
