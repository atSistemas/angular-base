import { ApplicationRef, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponents } from './app.components';

import { BaseComponent } from '../base/components/base';
import { BaseImports } from '../base/imports/';
import { BaseProviders } from '../base/providers/';
import { MainContainer } from './containers/main/main.component';

@NgModule({
  bootstrap: [ BaseComponent ],
  declarations: [
    BaseComponent,
    AppComponents,
  ],
  imports: [
    BaseImports,
    BrowserModule,
    HttpModule,
  ],
  providers: [ BaseProviders ],
})
export class AppModule {
  constructor(
    // private store: Store,
    // public mainService: MainService
  ) {
    console.log('APP MODULE CONSTRUCTOR');
  }
}
