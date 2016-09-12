import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BaseApp } from '../base';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { Routing, RoutingProviders } from '../base';
import { Store } from '../base/store';
import { MainContainer, MainDisplay } from './containers'
import { MainService } from './containers/main/services/main-service';
import { MainReducer } from './containers/main/reducers';
import { MainActions } from './containers/main/actions';
import { BaseReduxify } from '../base/decorators';
import { AppState } from '../base';


@NgModule({
  imports: [BrowserModule, HttpModule, Routing],
  declarations: [BaseApp, MainContainer, MainDisplay],
  providers: [RoutingProviders, Store, NgRedux, NgReduxRouter, DevToolsExtension, MainService, MainActions],
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
    private actions: MainActions,
    private mainService: MainService
  ) { }
}
