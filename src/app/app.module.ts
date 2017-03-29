import { Store } from '@ngrx/store';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ApplicationRef, NgModule } from '@angular/core';

import { State } from 'base';
import { BaseImports } from 'base/imports/';
import { BaseProviders } from 'base/providers/';
import { AppComponents } from './app.components';
import { BaseComponent } from 'base/components/base';

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
    public appRef: ApplicationRef,
    private store: Store<State>,
  ) {
    console.log('APP MODULE CONSTRUCTOR');
  }

}
