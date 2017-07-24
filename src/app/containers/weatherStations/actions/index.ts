import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../actionTypes';
import { WeatherStationService } from '../services';

@Injectable()
export class WeatherStationActions {

  constructor(
    private service: WeatherStationService,
  ) { }

  mainRequest(): Action {
    return {
      type: ActionTypes.MAINB_REQUEST,
      request: this.service.getData()
    };
  }

  weatherStations(): Action {
    return {
      type: ActionTypes.WEATHERSTATIONS_REQUEST,
      request: this.service.weatherStations()
    };
  }

  weatherStationSelected(id) {
    return {
      type: ActionTypes.WEATHERSTATION_SELECTED,
      id: id
    };
  }

  weatherStation(id): Action {
    return {
      type: ActionTypes.WEATHERSTATION_REQUEST,
      request: this.service.weatherStation(id)
    };
  }

  weather(lat, lng): Action {
    return {
      type: ActionTypes.FORECAST_REQUEST,
      request: this.service.weather(lat, lng)
    };
  }

};