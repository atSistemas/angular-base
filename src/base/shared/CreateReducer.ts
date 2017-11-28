import { Action } from '../models/action';
//import { Action } from '@ngrx/store';

export function createReducer<Cr>(actionHandler: any, initialState: any) {

  return (state: Cr, action: Action): Cr => {

    if (!state || !action) { return initialState; }

    if (typeof actionHandler[action.type] === 'function') {
      return actionHandler[action.type](state, action);
    }

    return state;
  };
}