import { Record } from 'immutable';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';

import { Lazy, LazyModel } from '../../app/containers/+lazy/models/lazy.model';
import { Weather, WeatherModel } from '../../app/containers/weather/models/weather.model';
import { Calculator, CalculatorModel } from '../../app/containers/calculator/models/calculator.model';

export interface State {
  lazy: Lazy;
  calculator: Calculator;
  weather: Record<Weather>;
  router: RouterReducerState<any>;
}

export const initialState: State = {
  lazy: LazyModel,
  calculator: CalculatorModel,
  weather: new WeatherModel(),
  router: undefined
};