import { ActionReducer, ActionReducerMap } from '@ngrx/store';
//import { createReducer } from 'base';
import { Action, State } from 'base';
import { Weather, WeatherModel } from '../models';


export function WeatherReducer(state: Weather, action): Weather {
  return new WeatherModel()
}