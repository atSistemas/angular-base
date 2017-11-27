import { Action } from '../models/action';

export function createReducer<Cr>(actionHandler: any, initialState: Cr) {

  return (state: Cr, action: Action): Cr => {

    if (!state || !action) { return initialState; }

    if (typeof actionHandler[action.type] === 'function') {
      return actionHandler[action.type](state, action);
    }

    return state;
  };
};