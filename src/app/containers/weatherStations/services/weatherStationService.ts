import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'base/imports/rx';
import { BaseService } from 'base/services/BaseService';
import config from '../config';

@Injectable()
export class WeatherStationService extends BaseService {
  constructor(public http: Http) {
    super(http);
  }

  public getData(): Observable<string> {
    return this.http.get('mocks/basic.json', this.optionsNoPre)
      .map(res => res.json());
  }

  //Cities within a rectangle zone
  public getWeatherStations(): Observable<string> {
    let api: string = config.WEATHER_API_URL;
    let method: string = '/box/city?bbox=12,32,15,37,6';
    let key: string = config.WEATHER_API_KEY;
    
    const urlApi = `${api}${method}${key}`;

    return this.http.get(urlApi, this.optionsNoPre)
      .map(res => res.json());
  }

  // public fetchWeatherStations():  Observable<string> {
  //   const urlApi = config.WEATHER_API_URL + 
  //     '/station/find?lat=40.4165000&lon=-3.7025600&cnt=300&units=metric&appid=' +
  //      config.WEATHER_API_KEY;

  //   return this.http.get(urlApi, this.optionsNoPre)
  //     .map(res => res.json());
  // }


  // public fetchWeatherStations():  Observable<string> {
  //   const urlApi = config.WEATHER_API_URL + 
  //     '/station/find?lat=40.4165000&lon=-3.7025600&cnt=300&units=metric&appid=' +
  //      config.WEATHER_API_KEY;

  //   return this.http.get(urlApi, this.optionsNoPre)
  //     .map(res => res.json());
  // }

  // fetchWeatherStation(id) {
  //   const urlApi = config.WEATHER_API_URL + 
  //     '/station?id=' + id + '&units=metric&appid=' +
  //      config.WEATHER_API_KEY;

  //   return fetch(urlApi)
  //   .then(req => req.json())
  //   // .then(data => helpers.parseWeatherStation(data) );
  // }

  // fetchWeather(lat, lng) {

  //   let urlCall = config.WEATHER_API_URL + 
  //     '/forecast/daily?lat=' + 
  //     lat +'&lon='+ 
  //     lng + '&cnt=8&lang=es&units=metric&appid=' +
  //     config.WEATHER_API_KEY;

  //   return fetch(urlCall)
  //   .then(req => req.json())
  //   // .then(data => helpers.parseWeather(data) );

  // }
}

