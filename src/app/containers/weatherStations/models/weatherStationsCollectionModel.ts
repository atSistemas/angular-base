import { Record, Map } from 'immutable';

export interface WeatherStationsCollection {
  data?: any;
  stationSelected?: number;
  forecast?: any;
  weatherStationDetails?: any;
};

export const WeatherStationsCollectionModel = Record<WeatherStationsCollection>({
  data: Map(),
  stationSelected: -1,
  forecast: Map(),
  weatherStationDetails: Map()
});

// import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';
// import { Map } from 'immutable';

// interface WeatherStationsCollectionBase {
//   data: any; 
//   stationSelected: number; 
//   forecast: any; 
//   weatherStationDetails:  any;
// };

// export type WeatherStationsCollection = Partial<WeatherStationsCollectionBase>;

// export interface WeatherStationsCollectionState extends TypedRecord<WeatherStationsCollectionState> {
//   WeatherStationsCollection: WeatherStationsCollection;
// }


// export const WeatherStationsCollectionInitialState = makeTypedFactory<WeatherStationsCollection, WeatherStationsCollectionState>({
//   data: Map(),
//   stationSelected: -1,
//   forecast: Map(),
//   weatherStationDetails: Map()
// })();

// // WeatherStationsCollectionInitialState.

// // var x: WeatherStationsCollectionState;
// // x.


// // import { Record, Map } from 'immutable';

// // const WeatherStationsCollection = new Record({ 
// //   data: new Map(), 
// //   stationSelected:-1, 
// //   forecast: new Map(), 
// //   weatherStationDetails:  new Map()
// // });

// // export default WeatherStationsCollection;














