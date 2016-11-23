import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BaseApp } from '../base/components/base';
import { Routing, getRoutingProviders } from '../base/routes';
import { Store } from '../base/store';
import { BaseReduxify } from '../base/decorators';

import { enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DevToolsExtension, NgReduxModule, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { MainContainer, MainDisplay } from './containers'
import { MainService } from './containers/main/services/main-service';
import { MainReducer } from './containers/main/reducers';

@NgModule({
  imports: [
    NgReduxModule,
    BrowserModule,
    HttpModule,
    Routing
  ],
  declarations: [
    BaseApp,
    MainContainer,
    MainDisplay
  ],
  providers: [Store, NgRedux, NgReduxRouter, DevToolsExtension, MainService],
  bootstrap: [BaseApp]
})/*
@BaseReduxify({
  reducers: MainReducer,
  epics: {
    mainService: ['getData']
  }
})*/
export class AppModule {
  constructor(
    private store: Store,
    public mainService: MainService
  ) { }
}
