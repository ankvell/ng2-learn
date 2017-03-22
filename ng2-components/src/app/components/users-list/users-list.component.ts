import { Component, OnInit, Input } from '@angular/core';
import { User } from './user-profile/user.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  @Input() usersList: Array<User>;
  
  constructor() {}
  ngOnInit() { }
}