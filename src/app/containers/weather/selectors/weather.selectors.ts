import { IState } from 'base/state'
import { Map, Record } from 'immutable'

import { IForecast } from '../models/forecast.model'
import { IStation } from '../models/station.model'

export const selectStationSelected = (state: IState): number => (
  state.weather.getIn(['stationSelected'])
)

export const selectStations = (state: IState): Map<number, Record<IStation>> => (
  state.weather.getIn(['stations'])
)

export const selectForecasts = (state: IState): Map<number, Record<IForecast>> => (
  state.weather.getIn(['forecasts'])
)
