import { RouterState } from '@ngrx/router-store';
import { Main } from 'base/models';
import { Calculator } from 'base/models';
import { WeatherStationsCollection } from 'base/models';

export interface State {
  router: RouterState;
  main: Main;
  calculator: Calculator;
  weatherStation: WeatherStationsCollection;
};