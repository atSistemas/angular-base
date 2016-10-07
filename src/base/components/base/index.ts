import { Component, ViewEncapsulation } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { createEpicMiddleware } from 'redux-observable';

import { AppState, Store } from '../../store';

@Component({
  selector: 'base-app',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './index.html'
})
export class BaseApp{

  constructor(
    public devTools: DevToolsExtension,
    public ngRedux: NgRedux<AppState>,
    public store: Store,
    public ngReduxRouter: NgReduxRouter){
    ngReduxRouter.initialize();
  }
};
