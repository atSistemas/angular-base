import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Action, State } from 'base';
import { Record } from 'immutable';

import { Weather, WeatherModel } from '../models/weather.model';
import { ActionTypes } from '../actionTypes';
import { WeatherActions } from '../actions';

const stationsRequest = (state: Record<Weather>): Record<Weather> => (
  state
);
const stationsSuccess = (state: Record<Weather>, action: Action): Record<Weather> => (
  state.set('stations', action.payload.response)
);
const stationsError = (state: Record<Weather>): Record<Weather> => (
  state
);

const selectStation = (state: Record<Weather>, action: Action): Record<Weather> => (
  state.set('stationSelected', action.payload.station)
);

const forecastsRequest = (state: Record<Weather>): Record<Weather> => (
  state
);
const forecastsSuccess = (state: Record<Weather>, action: Action): Record<Weather> => (
  state.set('forecasts', action.payload.response)
);
const forecastsError = (state: Record<Weather>): Record<Weather> => (
  state
);

const actionHandler: Map<string, any> = new Map<string, any>([
  [ActionTypes.get('STATIONS_REQUEST'), stationsRequest],
  [ActionTypes.get('STATIONS_SUCCESS'), stationsSuccess],
  [ActionTypes.get('STATIONS_ERROR'), stationsError],
  [ActionTypes.get('SELECT_STATION'), selectStation],
  [ActionTypes.get('FORECASTS_REQUEST'), forecastsRequest],
  [ActionTypes.get('FORECASTS_SUCCESS'), forecastsSuccess],
  [ActionTypes.get('FORECASTS_ERROR'), forecastsError]
]);

export function WeatherReducer(state: Record<Weather> = new WeatherModel(), action: Action) {
  const handler = actionHandler.get(action.type);
  return handler ? handler(state, action) : state;
}