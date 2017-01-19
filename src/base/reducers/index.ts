import { compose } from '@ngrx/core/compose';
import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';

import { MainReducer } from '../../app/containers/main/reducers';
import { MainModelInterface } from '../models';

export interface AppState {
  router: RouterState;
  main?: MainModelInterface;
}

export const reducers = {
  main: MainReducer,
  router: routerReducer,
};

const combined = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
    return combined(state, action);
}
