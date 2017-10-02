import { Record } from 'immutable';

export interface WeatherStations {
  id?: number;
  stationId?: number;
  name?: string;
  coord?: any;
};

export const WeatherStationsModel = Record<WeatherStations>({
  id: -1,
  stationId: -1,
  name: null,
  coord: null,
});