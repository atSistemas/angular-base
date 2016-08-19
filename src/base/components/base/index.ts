import { Component, ViewEncapsulation } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';

import { AppState, Store } from '../../store';

@Component({
  selector: 'base-app',
  directives: [ROUTER_DIRECTIVES],
  pipes: [ AsyncPipe ],
  encapsulation: ViewEncapsulation.None,
  templateUrl: './index.html'
})
export class BaseApp{

  constructor(
    private devTools: DevToolsExtension,
    private ngRedux: NgRedux<AppState>,
    private store: Store,
    private ngReduxRouter: NgReduxRouter){
    store.configureStore();
    ngReduxRouter.initialize();
  }
};
