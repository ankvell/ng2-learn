import { Component, OnInit, OpaqueToken, Inject } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

const HeaderInfo = new OpaqueToken('HeaderInfo');

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [{
    provide: HeaderInfo, 
    useValue: {
      type: 'Training webinar',
      topic: 'ng2-Services and DI'
    }
  }]
})
export class HomeComponent implements OnInit {

  constructor(
    private _localStorage: LocalStorageService,
    @Inject(HeaderInfo) public header_info: Object) { }

  ngOnInit() { 
    console.log(this.header_info);
  }

  public logout(): void {
    this._localStorage.logout();
  }
}
