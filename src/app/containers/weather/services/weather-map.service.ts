import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { generateMap } from 'base/shared/ModelHelper'
import { Map, Record } from 'immutable'
import { Observable } from 'rxjs/Observable'

import { OWM_API_FORECAST, OWM_API_STATION } from '../config/open-weather-map.config'
import { ForecastModel, IForecast } from '../models/forecast.model'
import { IStation, StationModel } from '../models/station.model'

@Injectable()
export class WeatherMapService {
  constructor (
    private http: Http
  ) { }

  public getStations (): Observable<Map<number, Record<IStation>>> {
    return this.http.get(OWM_API_STATION())
      .map((res) => res.json())
      .map((stations) => generateMap(stations.list, StationModel))
  }

  public getForecast (lat: number, lon: number): Observable<Map<number, Record<IForecast>>> {
    return this.http.get(OWM_API_FORECAST(lat, lon))
      .map((res) => res.json())
      .map((forecasts) => generateMap(forecasts.list, ForecastModel))
  }
}
