import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommaPipe } from './pipes/comma.pipe';


@NgModule({
  declarations: [
    CommaPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommaPipe,
  ],
})
export class CommaModule { }
