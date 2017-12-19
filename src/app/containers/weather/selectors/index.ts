import { Map, Record } from 'immutable';
import { State } from 'base/state';

import { Weather, Station, Forecast } from '../models';

export const selectStationSelected = (state: State): number => (
  state.weather.getIn(['stationSelected'])
);

export const selectStations = (state: State): Map<number, Record<Station>> => (
  state.weather.getIn(['stations'])
);

export const selectForecasts = (state: State): Map<number, Record<Forecast>> => (
  state.weather.getIn(['forecasts'])
);