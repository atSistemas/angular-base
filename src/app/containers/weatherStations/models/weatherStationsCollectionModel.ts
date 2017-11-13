import { Record, List } from 'immutable';
import { WeatherStationDetails, WeatherStationDetailsModel } from './weatherStationDetailsModel';
import { WeatherStations } from './weatherStationsModel';

export interface WeatherStationsCollection {
  data?: List<WeatherStations>;
  stationSelected?: number;
  weatherStationDetails?: WeatherStationDetails;
};

export const WeatherStationsCollectionModel = Record<WeatherStationsCollection>({
  data: List(),
  stationSelected: -1,
  weatherStationDetails: WeatherStationDetailsModel()
});