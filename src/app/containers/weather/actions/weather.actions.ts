import { Injectable } from '@angular/core'
import { IAction } from 'base'
import { ActionTypes } from '../actionTypes'
import { WeatherMapService } from '../services/weather-map.service'

@Injectable()
export class WeatherActions {

  constructor (
    public weatherMapService: WeatherMapService
  ) { }

  public selectStation (station: number): IAction {
    return {
      payload: { station },
      type: ActionTypes.SELECT_STATION
    }
  }

  public getStations (): IAction {
    return {
      request: this.weatherMapService.getStations(),
      type: ActionTypes.STATIONS_REQUEST
    }
  }

  public getForecast (lat: number, lon: number): IAction {
    return {
      request: this.weatherMapService.getForecast(lat, lon),
      type: ActionTypes.FORECASTS_REQUEST
    }
  }
}
