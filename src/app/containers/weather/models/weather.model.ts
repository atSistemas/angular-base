import { generateMap } from 'base/shared/ModelHelper'
import { Map, Record } from 'immutable'

import { ForecastModel, IForecast } from './forecast.model'
import { IStation, StationModel } from './station.model'

export interface IWeather {
  forecasts: Map<number, Record<IForecast>>
  stations: Map<number, Record<IStation>>
  stationSelected: number
}

export const WeatherModel: Record.Factory<IWeather> = Record<IWeather>({
  forecasts: Map<number, Record<IForecast>>(),
  stationSelected: -1,
  stations: Map<number, Record<IStation>>()
})
