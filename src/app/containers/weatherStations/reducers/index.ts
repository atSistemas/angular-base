import { createReducer } from 'base';
import { ActionTypes } from '../actionTypes';
import { WeatherStationsCollectionModel, WeatherStationsCollection } from '../models';

const weatherStationsRequest = state => state;

const weatherStationsError = state => state;

const weatherStationsSuccess =(state, action) => {
  return state
  .update('data', () => action.payload)
  .set('stationSelected', -1);
}

function weatherStationSelected(state, action) {
  return state.set('stationSelected', action.id);
}

function weatherStationRequest(state) { return state; }

function weatherStationError(state) { return state; }

function weatherStationSuccess(state, action) {
  return state.update('weatherStationDetails', () => action.payload);
}

function forecastRequest(state) { return state; }

function forecastError(state) { return state; }

const forecastSuccess = (state, action) => {
  return state
    .update('forecast', () => {
     
      return action.payload
    });
}

const request = state => {
  return state;
}

const error = state => {
  return state;
}

// const success = (state, action) => {
//   return Object.assign({}, state, action.payload);
// };

function  success (state, action) {
  const res = action.payload;
  return state
    // .update('main', function (value) {
   
    //   return action.payload;
    // });
    // .set('id', res.id)
    // .set('name', res.name);
    .setIn(['mainB', 'id'], res.id)
    .setIn(['mainB', 'name'], res.name);
}

const actionHandlers = {
  [ActionTypes.WEATHERSTATIONS_REQUEST]: weatherStationsRequest,
  [ActionTypes.WEATHERSTATIONS_SUCCESS]: weatherStationsSuccess,
  [ActionTypes.WEATHERSTATIONS_ERROR]: weatherStationsError,
  [ActionTypes.WEATHERSTATION_REQUEST]: weatherStationRequest,
  [ActionTypes.WEATHERSTATION_SUCCESS]: weatherStationSuccess,
  [ActionTypes.WEATHERSTATION_ERROR]: weatherStationError,
  [ActionTypes.WEATHERSTATION_SELECTED]: weatherStationSelected,
  [ActionTypes.FORECAST_REQUEST]: forecastRequest,
  [ActionTypes.FORECAST_SUCCESS]: forecastSuccess,
  [ActionTypes.FORECAST_ERROR]: forecastError,
  [ActionTypes.MAINB_REQUEST]: request,
  [ActionTypes.MAINB_SUCCESS]: success,
  [ActionTypes.MAINB_ERROR]: error
};

export const WeatherStationsReducer = createReducer<WeatherStationsCollection>(actionHandlers, WeatherStationsCollectionModel());
