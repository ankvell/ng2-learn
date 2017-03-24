import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';

import { LoginComponent, HomeComponent } from './components';
import { LocalStorageService, AccessToken, TokenGeneratorFactory, AccessTokenService, AuthorizationGuard } from './services';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [
    AuthorizationGuard, 
    LocalStorageService,
    AccessTokenService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
