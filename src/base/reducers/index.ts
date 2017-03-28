import { combineReducers } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { MainReducer } from '../../app/containers/main/reducers';
import { configureStore } from '../store';

export const rootReducer = combineReducers({
  main: MainReducer,
  router: routerReducer,
});

const store = configureStore(rootReducer);

export function RootReducer(state: any, action: any) {
  return store(state, action);
}
