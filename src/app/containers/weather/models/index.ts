import { Record, Map } from 'immutable';
import { State } from 'base/state';
import { generateMap } from '../../../../base/shared/ModelHelper';
import { Station, StationModel } from './StationModel';
import { ForecastModel, Forecast } from './ForecastModel';

export { Station, StationModel } from './StationModel';
export { Temp, ForecastModel, Forecast } from './ForecastModel';

export interface Weather {
  forecasts: Map<number, Record<Forecast>>;
  stations: Map<number, Record<Station>>;
  stationSelected: number;
}

export const WeatherModel = Record<Weather>({
  forecasts: Map<number, Record<Forecast>>(),
  stations: Map<number, Record<Station>>(),
  stationSelected: -1
});

export const setInitialState = (initialState: State): Record<Weather> => (
  initialState.weather = new WeatherModel(initialState.weather).mergeDeep({
    stations: generateMap(initialState.weather.get('stations', Map<number, Record<Station>>()), StationModel),
    forecasts: generateMap(initialState.weather.get('forecasts', Map<number, Record<Forecast>>()), ForecastModel)
  })
);