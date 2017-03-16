import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public title: string = 'Angular2 app';
  public showMore: boolean = true;
  public usersList: any;
  
  constructor(private _appService: AppService) {}

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.usersList = this._appService.getUsers();
  }
}
