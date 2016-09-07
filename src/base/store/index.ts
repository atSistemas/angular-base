import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { RootReducer } from '../reducers';
import * as createLogger from 'redux-logger';
import { MainModelInterface } from '../models';
import { createEpicMiddleware } from 'redux-observable';
import { createStore, applyMiddleware } from 'redux';
import { MainService } from '../../app/containers/main/services/main.service';
import { LazyService } from '../../app/containers/+lazy/services/lazy-service';
const middleware = [];

//const epicMiddleware = createEpicMiddleware(RootEpic);

export interface AppState {
  main?: MainModelInterface;
};

@Injectable()
export class Store {
  constructor(private ngRedux: NgRedux<AppState>,
  private MainServiceEpic: MainService,
  private LazyServiceEpic: LazyService) {}

  configureStore(){

    middleware.push(
      createLogger({
        level: 'info',
        collapsed: true,
      }));

    //FIXME COMBINE EPICS
    //middleware.push(epicMiddleware);
    middleware.push(createEpicMiddleware(this.MainServiceEpic.getData));
    middleware.push(createEpicMiddleware(this.LazyServiceEpic.getData));

    this.ngRedux.configureStore(RootReducer, {}, middleware);
  }
}
