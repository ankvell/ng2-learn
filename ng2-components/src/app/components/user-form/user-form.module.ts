import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { UserFormComponent } from './user-form.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule.forRoot()
  ],
  declarations: [UserFormComponent],
  providers: [],
  exports: [UserFormComponent]
})
export class UserFormModule { }
