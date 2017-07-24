import { Record } from 'immutable';

export interface Forecast{
  clouds?: number;
  deg?: number;
  dt?: number;
  humidity?: number;
  pressure?: number;
  speed?: number;
  temp?: any;
  weather?: any[];
};

export const ForecastModel = Record<Forecast>({
  clouds: 0,
  deg: 0,
  dt: 0,
  humidity: 0,
  pressure: 0,
  speed: 0,
  temp: {},
  weather: []
});




// export interface ForecastState  extends TypedRecord<ForecastState> {
//   Forecast: ForecastModel;
// }

// export const ForecastInitialState = makeTypedFactory<ForecastModel, ForecastState>({
//   clouds: 0,
//   deg: 0,
//   dt: 0,
//   humidity: 0,
//   pressure:0,
//   speed:0,
//   temp:{},
//   weather: []
// })();












// import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';

// interface ForecastModelBase {
//   clouds: number;
//   deg: number;
//   dt: number;
//   humidity: number;
//   pressure:number;
//   speed:number;
//   temp: {};
//   weather: any[];
// };

// export type ForecastModel = Partial<ForecastModelBase>;

// export interface ForecastState  extends TypedRecord<ForecastState> {
//   Forecast: ForecastModel;
// }

// export const ForecastInitialState = makeTypedFactory<ForecastModel, ForecastState>({
//   clouds: 0,
//   deg: 0,
//   dt: 0,
//   humidity: 0,
//   pressure:0,
//   speed:0,
//   temp:{},
//   weather: []
// })();




// import { Record } from 'immutable';

// const ForecastModel = new Record({
//   clouds: 0,
//   deg: 0,
//   dt: 0,
//   humidity: 0,
//   pressure:0,
//   speed:0,
//   temp:{},
//   weather: []
// });

// export default ForecastModel;