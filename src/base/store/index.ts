import reduxLogger from 'redux-logger';
import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { RootReducer } from '../reducers';
import { MainTypes, MainModel, InitialState } from '../models';

export interface AppState {
  main?: MainTypes;
};

@Injectable()
export class Store {
  constructor(private ngRedux: NgRedux<AppState>) {
  }
  configureStore(){
    this.ngRedux.configureStore(RootReducer, {});
  }
}
