import { Action } from '../models/action';
//import { Action } from '@ngrx/store';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { ENV, State } from 'base';
/*
export function createReducer<Cr>(actionHandler: any, initialState: any): void {

  const fn = (state: Cr, action: Action): Cr => {
    if (!state || !action) { return initialState; }

    if (typeof actionHandler[action.type] === 'function') {
      return actionHandler[action.type](state, action);
    }

    return state;
  };

}*/

//import { Action } from '../interfaces/action';

export function createReducer<Cr>(actionHandler: any, initialState: any) {

  return (state: Cr, action: Action): Cr => {

    if (!state || !action) { return initialState; }

    if (typeof actionHandler[action.type] === 'function') {
      return actionHandler[action.type](state, action);
    }

    return state;
  };
}