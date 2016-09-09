import { Injectable, Inject, ReflectiveInjector } from '@angular/core'
import { combineReducers, ReducersMapObject, Reducer, Action } from 'redux';
import { NgRedux } from 'ng2-redux';
import { routerReducer } from 'ng2-redux-router';
import { combineEpics } from 'redux-observable';

import { MainModelInterface, MainModel } from '../models';
import { AppState } from '../store';
import { MainService } from '../../app/containers/main/services/main-service';

export interface Reducer<Cr> {
  (state: Cr, action: Action): Object;
}

@Injectable()
class Reducers {
  private reducers: ReducersMapObject = {
    router: routerReducer,
  }
  static create<Cr>(actionHandler: any, initialState: Cr): Reducer<Cr> {
    return function (state: Cr, action: Action): Cr {

      if (!state) return initialState;

      if (typeof actionHandler[action.type] === 'function') {
        return actionHandler[action.type](state, action);
      }

      return state;

    }
  }

  constructor(private ngRedux: NgRedux<AppState>) { }
  get RootReducer() {
    return combineReducers<AppState>(this.reducers);
  }
  /*get ngRedux() {
    if (!this.ngReduxInstance) {
      const injector = ReflectiveInjector.resolveAndCreate([NgRedux]);
      this.ngReduxInstance = injector.get(NgRedux);
    }
    return this.ngReduxInstance;
  }*/
  attachReducers(reducers: ReducersMapObject) {
    return Object.assign(this.reducers, reducers);
  }
  private replaceReducer(combinedReducers: Reducer<{}>) {
    return this.ngRedux.replaceReducer(combinedReducers);
  }
  combineReducers(reducers?: ReducersMapObject) {
    if (reducers) {
      return this.replaceReducer(combineReducers(this.attachReducers(reducers)));
    } else {
      return this.replaceReducer(combineReducers(this.reducers));
    }
  }
}

export default Reducers;
