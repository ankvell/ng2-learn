import { OpaqueToken } from '@angular/core';
import { AccessTokenService } from './access-token.service';

export const AccessToken = new OpaqueToken('AccessToken');

export function TokenGeneratorFactory(take: number) {
  return function(accessTokenService: AccessTokenService): string {
    return accessTokenService.getAccessToken(take);
  }
}
