import { Action, ActionReducer } from '@ngrx/store';
import { ReducersMapObject } from 'redux';
import { Subject } from 'rxjs/Subject';

import { ActionTypes } from '../action-types';
import { createReducer } from '../../../../base/shared/CreateReducer';
import { InitialState, MainState, MainModelInterface } from '../models';

const click = (state) => {
  console.log('cliiiik');
  return state.update('main', (value) => 'eooo');
};

const request = (state, data) => {
  console.log('requeeeeeeest!!!');
  return state;
};

const login = (state, data) => {
  console.log('logiiiin!!!');
  return state;
};

const success = (state, action) => {
  console.log('sucesssssss!', action.payload);
  const data = action.payload;
  return state.update('main', (value) => action.payload);
};

const actionHandlers = {
  [ActionTypes.CLICK]: click,
  [ActionTypes.LOGIN]: login,
  [ActionTypes.MAIN_REQUEST]: request,
  [ActionTypes.MAIN_SUCCESS]: success,
};

const MainReducer = createReducer<MainModelInterface>(actionHandlers, InitialState);

export { MainReducer }
