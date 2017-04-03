import { createReducer } from 'base';
import { ActionTypes } from '../action-types';
import { MainModel, InitialState } from '../models';

const request = (state, data) => {
  return state;
};

const login = (state, data) => {
  return state;
};

const success = (state, action) => {
  return Object.assign({}, state, action.payload
  );
};

const actionHandlers = {
  [ActionTypes.LOGIN]: login,
  [ActionTypes.MAIN_REQUEST]: request,
  [ActionTypes.MAIN_SUCCESS]: success,
};

const MainReducer = createReducer<MainModel>(actionHandlers, InitialState);

export { MainReducer }
