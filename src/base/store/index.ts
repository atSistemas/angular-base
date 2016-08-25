import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { RootReducer } from '../reducers';
import * as reduxLogger from "redux-logger";
import { MainTypes } from '../models';

const middleware = [];

export interface AppState {
  main?: MainTypes;
};

@Injectable()
export class Store {
  constructor(private ngRedux: NgRedux<AppState>) {
  }
  configureStore() {

    const loggerMiddleware = (reduxLogger.default as any)({
      level: 'info',
      collapsed: true,
    });

    middleware.push(loggerMiddleware);

    this.ngRedux.configureStore(RootReducer, {}, middleware);
  }
}
