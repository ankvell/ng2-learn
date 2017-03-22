import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersListComponent } from './users-list.component';
import { UserProfileModule } from './user-profile/user-profile.module';

@NgModule({
  imports: [
    CommonModule,
    UserProfileModule
  ],
  declarations: [UsersListComponent],
  providers: [],
  exports: [UsersListComponent]
})
export class UsersListModule { }
