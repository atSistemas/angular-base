import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../actionTypes';
import { WeatherStationService } from '../services';

@Injectable()
export class WeatherStationActions {

  constructor(
    private service: WeatherStationService,
  ) { }

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
};