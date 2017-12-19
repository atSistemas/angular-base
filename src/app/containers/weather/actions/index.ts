import { Injectable } from "@angular/core";
import { Action } from "base";
import { ActionTypes } from "../actionTypes";
import { WeatherMapService } from "../services/weather-map.service";

@Injectable()
export class WeatherActions {

  constructor(
    private weatherMapService: WeatherMapService
  ){ }

  selectStation(station: number): Action {
    return {
      type: ActionTypes.SELECT_STATION,
      payload: { station }
    }
  }

  getStations(): Action {
    return {
      type: ActionTypes.STATIONS_REQUEST,
      request: this.weatherMapService.getStations()
    }
  }

  getForecast(lat: number, lon: number): Action {
    return {
      type: ActionTypes.FORECASTS_REQUEST,
      request: this.weatherMapService.getForecast(lat, lon)
    }
  }
}