import { compose } from '@ngrx/core/compose';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { routerReducer, RouterState } from '@ngrx/router-store';

import { MainReducer } from '../../app/containers/main/reducers';
import { MainState } from '../models';

export interface AppState {
  router: RouterState;
  main: MainState;
}

export const reducers = {
  main: MainReducer,
  router: routerReducer,
};

const enhancer = compose(storeLogger(), combineReducers)(reducers);

export function rootReducer(state: any, action: any) {
    return enhancer(state, action);
}
