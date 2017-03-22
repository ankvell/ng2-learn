import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  public showTags: boolean = true;
  @Input() user: User;

  constructor() { }
  ngOnInit() { }
}
