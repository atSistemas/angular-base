import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Map, Record } from 'immutable';
import { generateMap } from 'base/shared/ModelHelper';
import { Observable } from 'rxjs/Observable';

import { config } from '../config';
import { Station, StationModel } from '../models/StationModel';
import { Forecast, ForecastModel } from '../models/ForecastModel';

@Injectable()
export class WeatherMapService {
  private API_URL: string = config.OPEN_WEATHER_MAP_API_URL;
  private API_KEY = `appid=${ config.OPEN_WEATHER_MAP_API_KEY }`;

  constructor(
    private http: Http
  ) { }

  getStations(): Observable<Map<number, Record<Station>>> {
    const method = '/box/city?bbox=-9,36.6,2.22,43,10&';
    return this.http.get(this.createURL(method))
      .map(res => res.json())
      .map(stations => generateMap(stations.list, StationModel));
  }

  getForecast(lat: number, lon: number): Observable<Map<number, Record<Forecast>>> {
    const method = `/forecast/daily?lat=${ lat }&lon=${ lon }&cnt=8&lang=es&units=metric&`;
    return this.http.get(this.createURL(method))
      .map(res => res.json())
      .map(forecasts => generateMap(forecasts.list, ForecastModel));
  }

  private createURL(method: string): string {
    return this.API_URL + method + this.API_KEY;
  }
}