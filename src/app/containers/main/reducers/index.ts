import { createReducer } from 'base';
import { ActionTypes } from '../action-types';
import { Main, MainModel } from '../models';
import { State } from 'base';
import { Action } from '@ngrx/store';

import { ActionReducer, ActionReducerMap } from '@ngrx/store';

export function request(state: any, action: any) { return state; }
export function error(state: any, action: any) { return state; }
export function success(state: any, action: any) { return action.payload; }

export function login(state: any, data: any) { return state; }

export const actionHandlers = {
  LOGIN: login,
  MAIN_REQUEST: request,
  MAIN_ERROR: error,
  MAIN_SUCCESS: success,
};

//export const MainReducer = createReducer<Main>(actionHandlers, new MainModel());

export function MainReducer(state: any = new MainModel(), action: Action): Main {
  switch (action.type) {
    case ActionTypes.get('LOGIN'): {
      return state;
    }
    default: {
      return state;
    }
  }
}