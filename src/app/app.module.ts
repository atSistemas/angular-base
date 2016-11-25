import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { BaseComponent } from '../base/components/base';
import { MainContainer } from './containers/main/main.component';
import { BaseImports } from '../base/imports/';
import { BaseProviders } from '../base/providers/';

@NgModule({
  declarations: [
    BaseComponent,
    MainContainer
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
