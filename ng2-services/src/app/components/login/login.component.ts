import { Component, Inject, Optional, OnInit } from '@angular/core';
import { User } from './user.model';
import { LocalStorageService } from '../../services/local-storage.service';
import { AccessToken, TokenGeneratorFactory } from '../../services/access-token.factory';
import { AccessTokenService } from '../../services/access-token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [{
    provide: AccessToken, 
    useFactory: TokenGeneratorFactory(32),
    deps: [AccessTokenService]
  }]
})
export class LoginComponent implements OnInit {

  public user: User = new User('', '');
  public errorMsg = '';

  constructor(
    @Optional() private _localStorage: LocalStorageService,
    @Inject(AccessToken) private _tokenGenerator: string
  ) { }

  ngOnInit() { }

  public login(model): void {
    if(this._localStorage.login(this.user)) {
      this._localStorage.setValue('token', this._tokenGenerator);
    } else {
      this.errorMsg = 'Failed to login';
    }
  }
}
