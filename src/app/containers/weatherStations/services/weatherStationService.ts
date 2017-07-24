import { List, Map, Record } from 'immutable'
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'base/imports/rx';
import { Observable } from 'rxjs/Observable';
import * as helpers from '../helpers';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { BaseService } from 'base/services/BaseService';
import config from '../config';

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
        // debugger;
        return res.json()
      });
  }

  //Cities within a rectangle zone
  public weatherStations():Observable<List<any>>  {
    let method: string = '/box/city?bbox=-9,36.6,2.22,43,10&appid=';
    let urlApi = `${this.api}${method}${this.key}`;
     return  this.http.get(urlApi)
      .map(res=>List(helpers.parseWeatherStations(res.json().list)));
  }
 
  public weatherStations1() :Observable<Response>  {
    let method: string = '/box/city?bbox=-9,36.6,2.22,43,10&appid=';
    let urlApi = `${this.api}${method}${this.key}`;
     return  this.http.get(urlApi)
      .map(res=>res.json());
  }
  // public fetchWeatherStations():  Observable<string> {
  //   const urlApi = config.WEATHER_API_URL + 
  //     '/station/find?lat=40.4165000&lon=-3.7025600&cnt=300&units=metric&appid=' +
  //      config.WEATHER_API_KEY;

  //   return this.http.get(urlApi, this.optionsNoPre)
  //     .map(res => res.json());
  // }

  public weatherStation(id) { //: Observable<string>  {
  
    let method: string = `/group?id=${id}&units=metric&appid=`;
    let urlApi = `${this.api}${method}${this.key}`;

    return this.http.get(urlApi)
      .map(res => new (Record(res.json().list[0])));
  }

  public weather(lat, lng): Observable<string>  {
  
    let method: string = `/find?lat=${lat}&lon=${lng}&cnt=8&lang=es&units=metric&appid=`;
    let urlApi = `${this.api}${method}${this.key}`;

    return this.http.get(urlApi)
      .map(res => res.json().list);
    // .then(data => helpers.parseWeather(data) );

  }
}

