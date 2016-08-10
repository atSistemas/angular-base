import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';

import { AppState, ConfigureStore } from '../../store/';
import { MainContainer } from '../../../app/containers/main/';

@Component({
  selector: 'base-app',
  directives: [
    ROUTER_DIRECTIVES
  ],
  pipes: [ AsyncPipe ],
  encapsulation: ViewEncapsulation.None,
  template: `<h1>Base app!</h1>
  <a routerLink="/container2">container2</a><router-outlet></router-outlet>`
  //templateUrl: 'index.html';//require('./index.html')
})
export class BaseApp{
  @select(['session', 'isLoading']) isLoading$: Observable<boolean>;

  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<AppState>,
    private ngReduxRouter: NgReduxRouter){

    ConfigureStore(ngRedux, {});
    ngReduxRouter.initialize();
  }
};
