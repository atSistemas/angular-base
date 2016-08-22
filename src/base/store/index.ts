/// <reference path="../../../typings/globals/redux-logger/index.d.ts" />

import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { RootReducer } from '../reducers';
import createLogger = require('redux-logger');
import { MainTypes } from '../models';

const middleware = [];

console.log(createLogger)
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
