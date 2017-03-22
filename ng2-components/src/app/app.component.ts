import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';

import { AppService } from './services/app.service';
import { UsersListComponent } from './components/users-list/users-list.component';
import { User } from './components/users-list/user-profile/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{ 
  public showUserForm: boolean = false;
  public usersList: Array<User>;

  @ViewChild(UsersListComponent) listComponent: UsersListComponent;

  constructor(private _appService: AppService) { }

  ngOnInit() {
    this.getUsersList();
  }

  ngAfterViewInit() {
    console.log(this.listComponent.usersList);
  }

  getUsersList() {
    this.usersList = this._appService.getUsers();
    this.listComponent.usersList = this.usersList;
  }

  addUser(user: User) {
    this.usersList.push(user);
    this.showUserForm = false;
  }

  removeUser() {
    this._appService.removeUser();
  }
}
