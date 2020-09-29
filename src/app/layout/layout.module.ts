import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { HeaderComponent } from './components/header/header.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderContainer } from './containers/header/header.container';
import { HeaderView } from './views/header/header.view';
import { SidebarContainer } from './containers/sidebar/sidebar.container';
import { SidebarView } from './views/sidebar/sidebar.view';


@NgModule({
  declarations: [
    HeaderComponent,
    HeaderContainer,
    HeaderView,
    SidebarComponent,
    SidebarContainer,
    PaginatorComponent,
    SearchComponent,
    SidebarView,
  ],
  imports: [
    // Angular
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    // Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    MatPaginatorModule,
    MatAutocompleteModule,
  ],
  exports: [
    SidebarView,
    PaginatorComponent,
    HeaderView,
  ],
})
export class LayoutModule { }
