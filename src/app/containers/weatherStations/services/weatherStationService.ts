import { List, Record } from 'immutable';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as helpers from '../helpers';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from 'base/services/BaseService';
import { config } from '../config';

@Injectable()
export class WeatherStationService extends BaseService {
  private api: string = config.WEATHER_API_URL;
  private key: string = config.WEATHER_API_KEY;

  constructor(public http: Http) {
    super(http);
  }

  public getData(): Observable<string> {
    return this.http.get('mocks/basic.json', this.optionsNoPre)
      .map(res => {
        return res.json();
      });
  }

  public weatherStations(): Observable<List<any>>  {
    const method = '/box/city?bbox=-9,36.6,2.22,43,10&appid=';
    const urlApi = `${this.api}${method}${this.key}`;
    return this.http.get(urlApi)
      .map(res => List(helpers.parseWeatherStations(res.json().list)));
  }

  public weatherStation(id) { //: Observable<string>  {
    const method = `/group?id=${id}&units=metric&appid=`;
    const urlApi = `${this.api}${method}${this.key}`;

    return this.http.get(urlApi)
      .map(res => {
        // tslint:disable-next-line:new-parens
        return new (Record(res.json().list[0]));
      });
  }

  public weather(lat, lng): Observable<string>  {
    const method = `/find?lat=${lat}&lon=${lng}&cnt=8&lang=es&units=metric&appid=`;
    const urlApi = `${this.api}${method}${this.key}`;

    return this.http.get(urlApi)
      .map(res => res.json().list);
  }
}
