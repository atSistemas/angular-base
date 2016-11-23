declare var BASE_ENVIRONMENT: any;

import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { combineReducers, ReducersMapObject, Reducer } from 'redux';
import * as createLogger from 'redux-logger';
import { MainModelInterface } from '../models';
import { routerReducer } from 'ng2-redux-router';
import { Observable } from 'rxjs/Observable';
import { Epic, createEpicMiddleware, combineEpics, ActionsObservable } from 'redux-observable';
import { Action, createStore, applyMiddleware } from 'redux';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const middleware = [];

export interface AppState {
  main?: MainModelInterface;
};

@Injectable()
export class Store {
  static createReducer<Cr>(actionHandler: any, initialState: Cr): Reducer<Cr> {
    return function (state: Cr, action: Action): Cr {

      if (!state) return initialState;

      if (typeof actionHandler[action.type] === 'function') {
        return actionHandler[action.type](state, action);
      }

      return state;

    }
  }
  private _reducers: ReducersMapObject;
  private _defaultReducers: ReducersMapObject = {
    router: routerReducer,
  }
  private epics: Epic<Action>[] = [];
  public epic$: BehaviorSubject<Epic<Action>>;
  constructor(
    public ngRedux: NgRedux<AppState>,
  ) {
    console.log("configuring store");

    this.configureStore();
  }
  get RootReducer() {
    return combineReducers<AppState>(this._defaultReducers);
  }
  get reducers(): ReducersMapObject {
    return this._reducers || this._defaultReducers;
  }
  private configureStore() {

    if (BASE_ENVIRONMENT === 'development') {
      middleware.push(
        createLogger({
          level: 'info',
          collapsed: true,
        }));
    }

    this.epic$ = new BehaviorSubject(combineEpics(...this.epics))

    const rootEpic = (action$: ActionsObservable<Action>, store): Observable<Action> =>
      this.epic$.mergeMap((epic) =>
        epic(action$, store)
      );

    middleware.push(createEpicMiddleware(rootEpic));

    this.ngRedux.configureStore(this.RootReducer, {}, middleware);
  }
  protected attachReducers(reducers: ReducersMapObject) {
    return Object.assign(this.reducers, reducers);
  }
  public replaceReducer(combinedReducers: Reducer<{}>) {
    return this.ngRedux.replaceReducer(combinedReducers);
  }
  public combineReducers(reducers?: ReducersMapObject) {
    if (reducers) {
      return this.replaceReducer(combineReducers(this.attachReducers(reducers)));
    } else {
      return this.replaceReducer(combineReducers(this.reducers));
    }
  }
}
