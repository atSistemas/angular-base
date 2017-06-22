import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';

interface  WeatherStationsModelBase {
  id: number;
  stationId: number;
  distance: number;
  last: any;
  station: any;
};

export type  WeatherStationsModel = Partial< WeatherStationsModelBase>;

export interface  WeatherStationsState extends TypedRecord< WeatherStationsState> {
   WeatherStations:  WeatherStationsModel;
}

export const  WeatherStationsInitialState = makeTypedFactory< WeatherStationsModel,  WeatherStationsState>({
  id: 0,
  stationId: 0,
  distance: 0,
  last: null,
  station: null
})();


// import { Record } from 'immutable';

// const WeatherStationsModel = new Record({
//   id:0,
//   stationId: 0,
//   distance: 0,
//   last: null,
//   station:null
// });

// export default WeatherStationsModel;