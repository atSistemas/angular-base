import { ApplicationRef, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { Store } from '@ngrx/store';

import { AppState } from '../base/reducers/';
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
    public appRef: ApplicationRef,
    private _store: Store<AppState>,
  ) {
    console.log('APP MODULE CONSTRUCTOR');
  }

}
