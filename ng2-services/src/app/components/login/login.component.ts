import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LocalStorageService]
})
export class LoginComponent implements OnInit {

  public user: User = new User('', '');
  public errorMsg = '';

  constructor(private _localStorage: LocalStorageService) { }

  ngOnInit() { }

  public login(model): void {
    if(!this._localStorage.login(this.user)) {
        this.errorMsg = 'Failed to login';
    }
  }
}
