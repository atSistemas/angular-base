import { HttpModule } from '@angular/http';
import { ApplicationRef, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Store, State } from 'base';
import { BaseImports } from 'base/imports/';
import { BaseProviders } from 'base/providers/';

import { MainModule } from './containers/main/main.module';

import { AppComponent } from './app.component';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [
    AppComponent
  ],
  imports: [
    BaseImports,
    BrowserModule,
    HttpModule,
    MainModule
  ],
  providers: [ BaseProviders ]
})

export class AppModule {
  constructor(
    public appRef: ApplicationRef,
    private store: Store<State>
  ) {}

}
