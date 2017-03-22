import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LocalStorageService } from '../services/local-storage.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(private _localStorage : LocalStorageService) { }

  canActivate()  {
    return this._localStorage.isLoggedIn();
  }
}