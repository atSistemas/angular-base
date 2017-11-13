//import { List, Map } from 'immutable';
//import { generateMap } from 'base/shared/ModelHelper';
//import { WeatherStationsModel, WeatherStationDetailsModel } from '../models';

export function parseWeatherStations(data) {
  for (let i = 0; i < data.length; i++) {
    data[i].stationId = data[i].id;
    data[i].id = i + 1;
  }
  return data;
}

export function parseWeather(data) {
  for (let i = 0; i < data.list.length; i++) {
    data.list[i].id = i + 1;
  }
}
