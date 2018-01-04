import { Record } from 'immutable';

export interface Temp {
  day: number;
  min: number;
  max: number;
  night: number;
  eve: number;
  morn: number;
}

export interface Forecast {
  dt: number;
  temp: Record<Temp>;
}

const TempModel = Record<Temp>({
  day: 0,
  min: 0,
  max: 0,
  night: 0,
  eve: 0,
  morn: 0
});

export const ForecastModel = Record<Forecast>({
  dt: 0,
  temp: new TempModel()
});