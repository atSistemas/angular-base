import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Action, State } from 'base';
import { Record } from 'immutable';

import { Weather, WeatherModel } from '../models';
import { ActionTypes } from "../actionTypes";
import { WeatherActions } from '../actions';
import { Station } from '../models/StationModel';

const stationsRequest = (state: Record<Weather>, action: Action): Record<Weather> => (
  state
);
const stationsSuccess = (state: Record<Weather>, action: Action): Record<Weather> => (
  state.set('stations', action.payload.response)
);
const stationsError = (state: Record<Weather>, action: Action): Record<Weather> => (
  state
);

const selectStation = (state: Record<Weather>, action: Action): Record<Weather> => (
  state.set('stationSelected', action.payload.station)
);

const forecastsRequest = (state: Record<Weather>, action: Action): Record<Weather> => (
  state
);
const forecastsSuccess = (state: Record<Weather>, action: Action): Record<Weather> => (
  state.set('forecasts', action.payload.response)
);
const forecastsError = (state: Record<Weather>, action: Action): Record<Weather> => (
  state
);

const actionHandler: Map<string,Function> = new Map<string, Function>([
  [ActionTypes.STATIONS_REQUEST, stationsRequest],
  [ActionTypes.STATIONS_SUCCESS, stationsSuccess],
  [ActionTypes.STATIONS_ERROR, stationsError],
  [ActionTypes.SELECT_STATION, selectStation],
  [ActionTypes.FORECASTS_REQUEST, forecastsRequest],
  [ActionTypes.FORECASTS_SUCCESS, forecastsSuccess],
  [ActionTypes.FORECASTS_ERROR, forecastsError]
]);

export function WeatherReducer(state: Record<Weather> = new WeatherModel(), action: Action) {
  const handler = actionHandler.get(action.type)
  return handler ? handler(state,action) : state;
}