import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { Main, MainModel } from '../../app/containers/main/models';
import * as CalculatorModel from '../../app/containers/calculator/models';
import { Weather, WeatherModel } from '../../app/containers/weather/models';

export class State {
  main: Main;
  calculator: CalculatorModel.State;
  weather: Weather;
  router: RouterReducerState<any>;
}

export const initialState: State = {
  main: { id: 123, name: 'leches' },
  calculator: CalculatorModel.initialState,
  weather: new WeatherModel(),
  router: undefined
};