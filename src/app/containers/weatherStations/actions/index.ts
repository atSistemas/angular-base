import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../actionTypes';
import api from '../api';
// import { MainService } from '../services/main-service';

@Injectable()
export class WeatherStationActions {

  constructor(
    // private mainService: MainService,
  ) { }

  
  getWeatherStations(params) {
    return {
      type: ActionTypes.WEATHERSTATIONS_REQUEST,
      request: api.fetchWeatherStations()
      //request: api.fetchWeatherStations(params)
    };
  }

  weatherStationSelected(id) {
    return {
      type: ActionTypes.WEATHERSTATION_SELECTED,
      id: id
    };
  }

  getWeatherStation(id) {
    return {
      type: ActionTypes.WEATHERSTATION_REQUEST,
      request: api.fetchWeatherStation(id)
    };
  }

  getWeather(lat, lng) {
    return {
      type: ActionTypes.FORECAST_REQUEST,
      request: api.fetchWeather(lat, lng)
    };
  }
  
};


// import { generateFetchTypes } from 'base';
// import api from '../api';
// import ActionTypes from '../actionTypes';

// export function getWeatherStations( { params } ) {
//   return {
//     types: generateFetchTypes(ActionTypes.WEATHERSTATIONS_REQUEST),
//     request: api.fetchWeatherStations(params)
//   };
// }

// export function weatherStationSelected( id ) {
//   return {
//     type: ActionTypes.WEATHERSTATION_SELECTED,
//     id: id
//   };
// }

// export function getWeatherStation( id ) {
//   return {
//     types: generateFetchTypes(ActionTypes.WEATHERSTATION_REQUEST),
//     request: api.fetchWeatherStation( id )
//   };
// }


// export function getWeather( lat, lng ) {
//   return {
//     types: generateFetchTypes(ActionTypes.FORECAST_REQUEST),
//     request: api.fetchWeather(lat, lng)
//   };
// }

