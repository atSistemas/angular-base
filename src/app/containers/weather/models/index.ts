import { Record, Map } from 'immutable';
import { State } from 'base/state';
import { generateImmutable } from '../../../../base/shared/ModelHelper';
import { WeatherStation } from './WeatherStationModel';
import { ForecastModel, Forecast } from './ForecastModel';

export class Weather {
  forecast: Map<number, Forecast>;
  stations: Map<number, WeatherStation>;
  stationSelected: number;
}

export const WeatherModel = Record<Weather>({
  forecast: Map<number, Forecast>(),
  stations: Map<number, WeatherStation>(),
  stationSelected: -1
})

export const setInitialState = (initialState: State): Weather => (
  initialState.weather = new WeatherModel(initialState.weather).mergeDeep({
    stations: generateImmutable(initialState.weather.stations, WeatherStation),
    forecast: generateImmutable(initialState.weather.forecast, ForecastModel)
  })
)