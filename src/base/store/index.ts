import { MainModelInterface } from '../models';

export interface AppState {
  main?: MainModelInterface;
};
/*
declare var BASE_ENVIRONMENT: any;

import { Injectable } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { routerReducer } from 'ng2-redux-router';
import { Action, applyMiddleware, combineReducers, createStore, Reducer, ReducersMapObject } from 'redux';
import * as createLogger from 'redux-logger';
import { ActionsObservable, combineEpics, createEpicMiddleware, Epic } from 'redux-observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';

import { MainModelInterface } from '../models';

const middleware = [];

export interface AppState {
  main?: MainModelInterface;
};

@Injectable()
export class Store {

  public static createReducer<Cr>(actionHandler: any, initialState: Cr): Reducer<Cr> {
    return (state: Cr, action: Action): Cr => {

      if (!state) { return initialState; }

      if (typeof actionHandler[action.type] === 'function') {
        return actionHandler[action.type](state, action);
      }

      return state;
    };
  }

  public epic$: BehaviorSubject<Epic<Action>>;

  private _reducers: ReducersMapObject;
  private _defaultReducers: ReducersMapObject = {
    router: routerReducer,
  };
  private epics: Array<Epic<Action>> = [];

  constructor(
    public ngRedux: NgRedux<AppState>,
  ) {
    console.log('STORE CONFIGURATION');

    this.configureStore();
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

  protected attachReducers(reducers: ReducersMapObject) {
    return Object.assign(this.reducers, reducers);
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
          collapsed: true,
          level: 'info',
        }));
    }

    this.epic$ = new BehaviorSubject(combineEpics(...this.epics));

    const rootEpic = (action$: ActionsObservable<Action>, store): Observable<Action> =>
      this.epic$.mergeMap((epic) =>
        epic(action$, store),
      );

    middleware.push(createEpicMiddleware(rootEpic));

    this.ngRedux.configureStore(this.RootReducer, {}, middleware);
  }

}*/
