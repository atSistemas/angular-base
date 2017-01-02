import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BaseImports } from '../base/imports/';
import { AppComponents } from './app.components';
import { BaseProviders } from '../base/providers/';
import { BaseComponent } from '../base/components/base';
import { MainContainer } from './containers/main/main.component';

@NgModule({
  declarations: [
    BaseComponent,
    AppComponents
  ],
  imports: [
    BaseImports,
    BrowserModule,
    HttpModule,
  ],
  bootstrap: [ BaseComponent ],
  providers: [ BaseProviders ]
})
export class AppModule {
  constructor(
    //private store: Store,
    //public mainService: MainService
  ) {
    console.log('APP MODULE CONSTRUCTOR');
  }
}
