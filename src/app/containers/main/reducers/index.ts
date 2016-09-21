import { Action, ReducersMapObject } from 'redux';

import { actionTypes } from '../action-types';
import { MainModelInterface, MainModel, InitialState } from '../models';
import { Store } from 'base';

const click = (state) => {
  console.log('cliiiik');
  return state.update('main', (value) => "eooo");
}

const request = (state, data) => {
  console.log('requeeeeeeest!!!');
  return state;
}

const success = (state, action) => {
  console.log('sucesssssss!', action.payload);
  const data = action.payload;
  return state.update('main', (value) => action.payload);

}

const actionHandlers = {
  [actionTypes.CLICK]: click,
  [actionTypes.MAIN_REQUEST]: request,
  [actionTypes.MAIN_SUCCESS]: success
}

const MainReducer: ReducersMapObject = {
  main: Store.createReducer<MainModelInterface>(actionHandlers, InitialState)
}

export { MainReducer }
