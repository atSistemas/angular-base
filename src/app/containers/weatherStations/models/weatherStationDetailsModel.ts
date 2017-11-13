import { Record } from 'immutable';

export interface WeatherStationDetails {
  id: number;
  temp: number;
  pressure: number;
  humidity: number;
  wind: any;
  visibility: any;
  rain: any;
  dt: number;
};

export const WeatherStationDetailsModel = Record<WeatherStationDetails>({
  id: -1,
  temp: 0,
  pressure: 0,
  humidity: 0,
  wind: null,
  visibility: null,
  rain: null,
  dt: 0
});

// import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';

// interface WeatherStationDetailsModelBase {
//   id: number;
//   temp: number;
//   pressure: number;
//   humidity: number;
//   wind: any;
//   visibility: any;
//   rain: any;
//   dt: number;
// };

// export type WeatherStationDetailsModel = Partial<WeatherStationDetailsModelBase>;

// export interface WeatherStationDetailsState  extends TypedRecord<WeatherStationDetailsState> {
//   WeatherStationDetails: WeatherStationDetailsModel;
// }

// export const WeatherStationDetailsInitialState =
//  makeTypedFactory<WeatherStationDetailsModel, WeatherStationDetailsState>({
//   id:-1,
//   temp: 14,
//   pressure: 0,
//   humidity: 0,
//   wind: null,
//   visibility: null,
//   rain:null,
//   dt: 0
// })();

// // import { Record } from 'immutable';

// // const WeatherStationDetailsModel = new Record({
// //   id:-1,
// //   temp: 14,
// //   pressure: 0,
// //   humidity: 0,
// //   wind: null,
// //   visibility: null,
// //   rain:null,
// //   dt: 0
// // });

// // export default WeatherStationDetailsModel;