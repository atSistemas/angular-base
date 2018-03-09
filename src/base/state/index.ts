import { routerReducer, RouterReducerState } from '@ngrx/router-store'
import { Record } from 'immutable'

import { ILazy, LazyModel } from '../../app/containers/+lazy/models/lazy.model'
import { CalculatorModel, ICalculator } from '../../app/containers/calculator/models/calculator.model'
import { IWeather, WeatherModel } from '../../app/containers/weather/models/weather.model'

export interface IState {
  lazy: ILazy
  calculator: ICalculator
  weather: Record<IWeather>
  router: RouterReducerState<any>
}

export const initialState: IState = {
  calculator: CalculatorModel,
  lazy: LazyModel,
  router: undefined,
  weather: new WeatherModel()
}
