import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { RootReducer } from '../reducers';
import { MainTypes, MainModel, InitialState } from '../models';

const createLogger = require('redux-logger');
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
