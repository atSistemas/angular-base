import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { storeLogger } from 'ngrx-store-logger';
import { storeFreeze } from 'ngrx-store-freeze';
import { ENV, State } from 'base';

import { LazyReducer } from '../../app/containers/+lazy/reducers';
import { CalculatorReducer } from '../../app/containers/calculator/reducers';
import { WeatherReducer } from '../../app/containers/weather/reducers';

export const reducers: ActionReducerMap<State> = {
  calculator: CalculatorReducer,
  lazy: LazyReducer,
  router: routerReducer,
  weather: WeatherReducer
};

export function logger(reducer: ActionReducer<State>): any {
  return storeLogger({
    collapsed: true
  })(reducer);
}

export const metaReducers: any[] = (ENV !== 'development') ? [] : [
  logger,
  storeFreeze
];