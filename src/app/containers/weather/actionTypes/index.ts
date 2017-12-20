import { createActionTypes } from 'base/shared/CreateActionType';

export const ActionTypes: Map<string, string> = createActionTypes([
  'STATIONS_REQUEST',
  'STATIONS_SUCCESS',
  'STATIONS_ERROR',
  'SELECT_STATION',
  'FORECASTS_REQUEST',
  'FORECASTS_SUCCESS',
  'FORECASTS_ERROR'
]);
