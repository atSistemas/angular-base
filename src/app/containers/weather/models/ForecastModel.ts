import { Record } from 'immutable';

class Temp {
  day: number;
  min: number;
  max: number;
  nigth: number;
  even: number;
  morn: number;
}

export class Forecast {
  dt: number;
  temp: Record<Temp>
}


const TempModel = Record<Temp>({
  day: 0,
  min: 0,
  max: 0,
  nigth: 0,
  even: 0,
  morn: 0
})

export const ForecastModel = Record<Forecast>({
  dt: 0,
  temp: new TempModel()
})