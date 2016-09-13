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

//const epicMiddleware = createEpicMiddleware(RootEpic);

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
  private epics: Epic[] = [];
  public epic$: BehaviorSubject<Epic>;
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
  attachReducers(reducers: ReducersMapObject) {
    return Object.assign(this.reducers, reducers);
  }
  protected replaceReducer(combinedReducers: Reducer<{}>) {
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
