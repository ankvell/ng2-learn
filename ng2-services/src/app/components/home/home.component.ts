import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _localStorage: LocalStorageService) { }

  ngOnInit() { }

  public logout(): void {
    this._localStorage.logout();
  }
}
