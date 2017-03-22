import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../components/login/user.model';

var users = [
  new User('admin@admin','admin'),
  new User('user@user','user')
];
 
@Injectable()
export class LocalStorageService {
  
  private storage: Storage;

  constructor(
    private _router: Router
  ) {
    this.storage = window['localStorage'];
  }

  public isLoggedIn(): boolean {
    if(this.getValue('user_name')) {
      return true;
    }

    this._router.navigate(['login']);  
    return false;
  }

  public login(user): boolean {
    var authenticatedUser: User = users.find(u => u.email === user.email);
    if (authenticatedUser && authenticatedUser.password === user.password) {

      this.setValue('user_name', JSON.stringify(authenticatedUser));
      this._router.navigate(['home']);      
      return true;
    }
    return false;
  }

  public logout(): void {
    this.storage.removeItem('user_name');
    this._router.navigate(['login']);
  }

  public getValue(key: string): string {
    return this.storage.getItem(key);
  }

  public setValue(key: string, data: string): void {
    this.storage.setItem(key, data);
  }
}