import { createReducer } from 'base';
import { ActionTypes } from '../action-types';
import { LazyModel } from '../models';

const request = (state, data) => {
  return state;
};

const success = (state, action) => {
  return state.update('lazy', (value) => action.payload);
};

const actionHandlers = {
  [ActionTypes.LAZY_REQUEST]: request,
  [ActionTypes.LAZY_SUCCESS]: success,
};

export const LazyReducer = createReducer(actionHandlers, new LazyModel());
