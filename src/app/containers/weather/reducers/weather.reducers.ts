import { Injectable } from '@angular/core'
import { ActionReducer, ActionReducerMap } from '@ngrx/store'
import { IAction,IState } from 'base'
import { Record } from 'immutable'

import { ActionTypes } from '../actionTypes'
import { IWeather, WeatherModel } from '../models/weather.model'

const stationsRequest = (state: Record<IWeather>): Record<IWeather> => (
  state
)
const stationsSuccess = (state: Record<IWeather>, action: IAction): Record<IWeather> => (
  state.set('stations', action.payload.response)
)
const stationsError = (state: Record<IWeather>): Record<IWeather> => (
  state
)

const selectStation = (state: Record<IWeather>, action: IAction): Record<IWeather> => (
  state.set('stationSelected', action.payload.station)
)

const forecastsRequest = (state: Record<IWeather>): Record<IWeather> => (
  state
)
const forecastsSuccess = (state: Record<IWeather>, action: IAction): Record<IWeather> => (
  state.set('forecasts', action.payload.response)
)
const forecastsError = (state: Record<IWeather>): Record<IWeather> => (
  state
)

const actionHandler: Map<string, any> = new Map<string, any>([
  [ActionTypes.STATIONS_REQUEST, stationsRequest],
  [ActionTypes.STATIONS_SUCCESS, stationsSuccess],
  [ActionTypes.STATIONS_ERROR, stationsError],
  [ActionTypes.SELECT_STATION, selectStation],
  [ActionTypes.FORECASTS_REQUEST, forecastsRequest],
  [ActionTypes.FORECASTS_SUCCESS, forecastsSuccess],
  [ActionTypes.FORECASTS_ERROR, forecastsError]
])

export function WeatherReducer (state: Record<IWeather> = new WeatherModel(), action: IAction) {
  const handler = actionHandler.get(action.type)
  return handler ? handler(state, action) : state
}
