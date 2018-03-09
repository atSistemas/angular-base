import { routerReducer } from '@ngrx/router-store'
import { ActionReducer, ActionReducerMap, combineReducers } from '@ngrx/store'
import { ENV, IState } from 'base'
import { storeFreeze } from 'ngrx-store-freeze'
import { storeLogger } from 'ngrx-store-logger'

import { LazyReducer } from '../../app/containers/+lazy/reducers'
import { CalculatorReducer } from '../../app/containers/calculator/reducers'
import { WeatherReducer } from '../../app/containers/weather/reducers'

export const reducers: ActionReducerMap<IState> = {
  calculator: CalculatorReducer,
  lazy: LazyReducer,
  router: routerReducer,
  weather: WeatherReducer
}

export function logger (reducer: ActionReducer<IState>): any {
  return storeLogger({
    collapsed: true
  })(reducer)
}

export const metaReducers: any[] = (ENV !== 'development') ? [] : [
  logger,
  storeFreeze
]
