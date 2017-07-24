import { RouterState } from '@ngrx/router-store';
// import { MainState } from 'base/models';
import { Main } from 'base/models';
import { Calculator } from 'base/models';
import { WeatherStationsCollection } from 'base/models';

export interface State {
  router: RouterState;
  main: Main;
  calculator: Calculator;
  weatherStation: WeatherStationsCollection;
};