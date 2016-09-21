import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BaseApp, Routing, RoutingProviders, Store, BaseReduxify } from 'base';
import { enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { MainContainer } from './containers/main';
import { MainService } from './containers/main/services/main-service';
import { MainReducer } from './containers/main/reducers';

import SharedComponents from './components';
import MainComponents from './containers/main/components';

@NgModule({
  imports: [BrowserModule, HttpModule, Routing],
  declarations: [BaseApp, MainContainer, ...SharedComponents, ...MainComponents],
  providers: [RoutingProviders, Store, NgRedux, NgReduxRouter, DevToolsExtension, MainService],
  bootstrap: [BaseApp]
})
@BaseReduxify({
  reducers: MainReducer,
  epics: {
    mainService: ['getData']
  }
})
export class Application {
  constructor(
    private store: Store,
    private mainService: MainService
  ) { }
}
