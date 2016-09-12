import { Injectable, Inject, ReflectiveInjector } from '@angular/core'
import { combineReducers, ReducersMapObject, Reducer, Action } from 'redux';
import { NgRedux } from 'ng2-redux';
import { routerReducer } from 'ng2-redux-router';
import { combineEpics } from 'redux-observable';
import { Store } from '../../base/store';
import { MainModelInterface, MainModel } from '../models';
import { AppState } from '../store';
import { MainService } from '../../app/containers/main/services/main-service';

export interface Reducer<Cr> {
  (state: Cr, action: Action): Object;
}

@Injectable()
class Reducers {
  private reducersMap: ReducersMapObject;
  static create<Cr>(actionHandler: any, initialState: Cr): Reducer<Cr> {
    return function (state: Cr, action: Action): Cr {

      if (!state) return initialState;

      if (typeof actionHandler[action.type] === 'function') {
        return actionHandler[action.type](state, action);
      }

      return state;

    }
  }

  constructor(private store:Store) { 
    this.reducersMap = this.store.defaultReducers;
  }
  get RootReducer() {
    return combineReducers<AppState>(this.reducersMap);
  }
  attachReducers(reducers: ReducersMapObject) {
    return Object.assign(this.reducersMap, reducers);
  }
  protected replaceReducer(combinedReducers: Reducer<{}>) {
    return this.store.ngRedux.replaceReducer(combinedReducers);
  }
  public combineReducers(reducers?: ReducersMapObject) {
    if (reducers) {
      return this.replaceReducer(combineReducers(this.attachReducers(reducers)));
    } else {
      return this.replaceReducer(combineReducers(this.reducersMap));
    }
  }
}

export default Reducers;
