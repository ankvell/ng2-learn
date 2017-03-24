import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    private _localStorage : LocalStorageService,
    private router: Router
  ) { }

  canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot)  {
    return this._localStorage.isLoggedIn();
  }
}