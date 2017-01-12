import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';

import { BaseImports } from '../base/imports/';
import { AppComponents } from './app.components';
import { BaseProviders } from '../base/providers/';
import { BaseComponent } from '../base/components/base';

@NgModule({
  declarations: [
    BaseComponent,
    AppComponents
  ],
  imports: [
    BaseImports,
    UniversalModule
  ],
  bootstrap: [ BaseComponent ],
  providers: [ BaseProviders ]
})
export class AppModule {
  constructor(
    //private store: Store,
    //public mainService: MainService
  ) {
    console.log('UNIVERSAL MODULE CONSTRUCTOR');
  }
}
