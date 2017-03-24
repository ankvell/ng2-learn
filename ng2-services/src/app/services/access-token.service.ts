import { Injectable } from '@angular/core';

@Injectable()
export class AccessTokenService {

  getAccessToken(count: number) {
    let token: string = '';
    let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for(let i = 0; i < count; i++)
        token += possible.charAt(Math.floor(Math.random() * possible.length));

    return token;
  }
}
