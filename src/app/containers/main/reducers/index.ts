import { createReducer } from 'base';
import { ActionTypes } from '../action-types';
import { Main, MainModel } from '../models';

const request = state => state;
const error = state => state;

const success = (state, action) => {
  const res = action.payload;
  return state
    .set('id', res.id)
    .set('name', res.name);
};

const login = (state, data) => {
  return state;
};

const actionHandlers = {
  [ActionTypes.LOGIN]: login,
  [ActionTypes.MAIN_REQUEST]: request,
  [ActionTypes.MAIN_ERROR]: error,
  [ActionTypes.MAIN_SUCCESS]: success,
};

export const MainReducer = createReducer(actionHandlers, new MainModel());
