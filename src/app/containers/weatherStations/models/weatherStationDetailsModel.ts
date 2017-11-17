import { Record } from 'immutable';

export interface WeatherStationDetails {
  id: number;
  temp: number;
  pressure: number;
  humidity: number;
  wind: any;
  visibility: any;
  main?: any;
  rain: any;
  dt: number;
};

export const WeatherStationDetailsModel = Record<WeatherStationDetails>({
  id: -1,
  temp: 0,
  pressure: 0,
  humidity: 0,
  wind: null,
  visibility: null,
  rain: null,
  dt: 0
});