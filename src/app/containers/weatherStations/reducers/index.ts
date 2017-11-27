import { createReducer } from 'base';
import { ActionTypes } from '../actionTypes';
import { WeatherStationsCollectionModel, WeatherStationsCollection } from '../models';

const weatherStationsRequest = state => state;

const weatherStationsError = state => state;

const weatherStationsSuccess = (state, action) => (
 state
  .update('data', () => action.payload)
  .set('stationSelected', -1)
);

function weatherStationSelected(state, action) {
  return state.set('stationSelected', action.id);
}

function weatherStationRequest(state) { return state; }

function weatherStationError(state) { return state; }

function weatherStationSuccess(state, action) {
  return state.update('weatherStationDetails', () => action.payload);
}

const actionHandlers = {
  [ActionTypes.WEATHERSTATIONS_REQUEST]: weatherStationsRequest,
  [ActionTypes.WEATHERSTATIONS_SUCCESS]: weatherStationsSuccess,
  [ActionTypes.WEATHERSTATIONS_ERROR]: weatherStationsError,

  [ActionTypes.WEATHERSTATION_REQUEST]: weatherStationRequest,
  [ActionTypes.WEATHERSTATION_SUCCESS]: weatherStationSuccess,
  [ActionTypes.WEATHERSTATION_ERROR]: weatherStationError,
  [ActionTypes.WEATHERSTATION_SELECTED]: weatherStationSelected,

};

export const WeatherStationsReducer =
  createReducer(actionHandlers, new WeatherStationsCollectionModel());
