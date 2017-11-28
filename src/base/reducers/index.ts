import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';

import { MainReducer } from '../../app/containers/main/reducers';
import { CalculatorReducer } from '../../app/containers/calculator/reducers';

import { ENV, State } from 'base';

export const reducers: ActionReducerMap<State> = {
  main: MainReducer,
  //calculator: CalculatorReducer,
  //router: routerReducer
};

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger({
    collapsed: true
  })(reducer);
}

export const metaReducers = (ENV !== 'development') ? [] : [
  logger,
  storeFreeze
];