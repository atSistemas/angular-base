import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { MainReducer } from '../../app/containers/main/reducers';
import { CalculatorReducer } from '../../app/containers/calculator/reducers';
import { WeatherStationsReducer } from '../../app/containers/weatherStations/reducers';

import { configureStore } from '../store';

export const rootReducer = combineReducers({
  main: MainReducer,
  calculator: CalculatorReducer,
  weatherStation: WeatherStationsReducer,
  router: routerReducer
});

const store = configureStore(rootReducer);

export function RootReducer(state: any, action: any) {
  return store(state, action);
}