import { createActionTypes } from 'base/shared/CreateActionTypes'

export const ActionTypes = createActionTypes([
  'STATIONS_REQUEST',
  'STATIONS_SUCCESS',
  'STATIONS_ERROR',
  'SELECT_STATION',
  'FORECASTS_REQUEST',
  'FORECASTS_SUCCESS',
  'FORECASTS_ERROR'
])
