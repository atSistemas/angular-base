import { Reducer, Action } from 'redux';

export interface Reducer<Cr> {
  (state: Cr, action: Action): Object;
}

//FIXME 
export default function CreateReducer<Cr>(actionHandler: any, initialState: Cr): Reducer<Cr> {
  return function (state: Cr, action: Action): Cr {

    if(!state) return initialState;

    if (typeof actionHandler[action.type] === 'function') {
      return actionHandler[action.type](state, action);
    }

    return state;

  }
}
