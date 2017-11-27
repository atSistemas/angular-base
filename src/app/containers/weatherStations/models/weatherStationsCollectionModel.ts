import { Record, List } from 'immutable';
import { WeatherStationDetailsModel } from './weatherStationDetailsModel';
import { WeatherStations } from './weatherStationsModel';
import { WeatherStationDetails } from './weatherStationDetailsModel';

export interface WeatherStationsCollection {
  data?: List<WeatherStations>;
  stationSelected?: number;
  weatherStationDetails?: WeatherStationDetails;
}

export const WeatherStationsCollectionModel = Record({
  data: List(),
  stationSelected: -1,
  weatherStationDetails: WeatherStationDetailsModel()
});