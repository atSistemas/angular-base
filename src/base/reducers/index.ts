import { compose } from '@ngrx/core/compose';
import { ActionReducer, combineReducers } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { storeLogger } from 'ngrx-store-logger';
import { routerReducer, RouterState } from '@ngrx/router-store';

import { MainModelInterface } from '../models';

import { MainReducer } from '../../app/containers/main/reducers';

export interface AppState {
  router: RouterState;
  main?: MainModelInterface;
}

export const reducers = {
  router: routerReducer,
  main: MainReducer
};

const combined = combineReducers(reducers);

export function rootReducer(state: any, action: any) {
    return combined(state, action);
}
