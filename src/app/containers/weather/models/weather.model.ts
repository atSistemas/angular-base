import { generateMap } from 'base/shared/ModelHelper';
import { Record, Map } from 'immutable';
import { State } from 'base/state';

import { Station, StationModel } from './station.model';
import { ForecastModel, Forecast } from './forecast.model';

export interface Weather {
  forecasts: Map<number, Record<Forecast>>;
  stations: Map<number, Record<Station>>;
  stationSelected: number;
}

export const WeatherModel: Record.Factory<Weather> = Record<Weather>({
  forecasts: Map<number, Record<Forecast>>(),
  stations: Map<number, Record<Station>>(),
  stationSelected: -1
});