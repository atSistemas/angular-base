import { Record, Map, List } from 'immutable';
//import {MainB, MainBModelInitialState, MainBModel} from '../models/mainBModel';
// import {MainB, MainBModel} from './mainBModel';
import {MainB, MainBModel} from './mainBModel';
import {WeatherStationDetails, WeatherStationDetailsModel} from './weatherStationDetailsModel';
import {WeatherStations, WeatherStationsModel} from './weatherStationsModel';

export interface WeatherStationsCollection {
  data?: List<WeatherStations>;
  mainB?:MainB;
  stationSelected?: number;
  forecast?: any;
  weatherStationDetails?:WeatherStationDetails;
};



export const WeatherStationsCollectionModel = Record<WeatherStationsCollection>({
  data: List(),
  mainB: MainBModel(),
  stationSelected: -1,
  forecast: Map(),
  weatherStationDetails: WeatherStationDetailsModel()
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














