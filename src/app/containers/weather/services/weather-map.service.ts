import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Map, Record } from 'immutable';
import { generateMap } from 'base/shared/ModelHelper';
import { Observable } from 'rxjs/Observable';

import { OWM_API_FORECAST, OWM_API_STATION } from '../config/open-weather-map.config';
import { Station, StationModel } from '../models/station.model';
import { Forecast, ForecastModel } from '../models/forecast.model';

@Injectable()
export class WeatherMapService {
  constructor(
    private http: Http
  ) { }

  getStations(): Observable<Map<number, Record<Station>>> {
    return this.http.get(OWM_API_STATION())
      .map(res => res.json())
      .map(stations => generateMap(stations.list, StationModel));
  }

  getForecast(lat: number, lon: number): Observable<Map<number, Record<Forecast>>> {
    return this.http.get(OWM_API_FORECAST(lat, lon))
      .map(res => res.json())
      .map(forecasts => generateMap(forecasts.list, ForecastModel));
  }
}