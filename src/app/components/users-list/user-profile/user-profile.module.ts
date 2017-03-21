import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { UserProfileComponent } from './user-profile.component';
import { HighlightDirective } from '../../../directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [UserProfileComponent, HighlightDirective],
  providers: [],
  exports: [UserProfileComponent]
})
export class UserProfileModule { }
