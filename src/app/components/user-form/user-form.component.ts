import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../users-list/user-profile/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  @Output() addUser: EventEmitter<User> = new EventEmitter<User>()
  constructor() { }
  ngOnInit() { }

  onAddUser(firstName: string, lastName: string, company: string, phone: string, email: string, address: string, about: string) {
    let user = new User({first: firstName, last: lastName}, company, phone, email, address, about);    
    this.addUser.emit(user);
  }
}
