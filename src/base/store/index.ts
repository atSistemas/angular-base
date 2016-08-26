import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { RootReducer } from '../reducers';
import * as createLogger from 'redux-logger';
import { MainTypes } from '../models';

const middleware = [];

export interface AppState {
  main?: MainTypes;
};

@Injectable()
export class Store {
  constructor(private ngRedux: NgRedux<AppState>) {
  }
  configureStore(){

    middleware.push(
      createLogger({
      level: 'info',
      collapsed: true,
    }));

    this.ngRedux.configureStore(RootReducer, {}, middleware);
  }
}
