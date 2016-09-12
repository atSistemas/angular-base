import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { combineReducers, ReducersMapObject } from 'redux';
import Reducers from '../reducers';
import * as createLogger from 'redux-logger';
import { MainModelInterface } from '../models';
import { routerReducer } from 'ng2-redux-router';
import { Observable } from 'rxjs/Observable';
import { Epic, createEpicMiddleware, combineEpics, ActionsObservable } from 'redux-observable';
import { Action, createStore, applyMiddleware } from 'redux';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const middleware = [];

//const epicMiddleware = createEpicMiddleware(RootEpic);

export interface AppState {
  main?: MainModelInterface;
};

@Injectable()
export class Store {
  public defaultReducers: ReducersMapObject = {
    router: routerReducer,
  }
  private epics: Observable<Action>[] = [];
  public epic$: BehaviorSubject<Epic>;
  constructor(
    public ngRedux: NgRedux<AppState>,
  ) { 
    this.configureStore();
  }
  get RootReducer() {
    return combineReducers<AppState>(this.defaultReducers);
  }
  configureStore() {

    middleware.push(
      createLogger({
        level: 'info',
        collapsed: true,
      }));

    this.epic$ = new BehaviorSubject(combineEpics(...this.epics))

    const rootEpic = (action$: ActionsObservable, store): Observable<Action> =>
      this.epic$.mergeMap(epic =>
        epic(action$, store)
      );

    middleware.push(createEpicMiddleware(rootEpic));

    this.ngRedux.configureStore(this.RootReducer, {}, middleware);
  }
}
