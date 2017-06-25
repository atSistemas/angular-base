import { createReducer } from 'base';
import { actionTypes } from '../action-types';
import { LazyInitialState, LazyModel } from '../models';

const request = (state, data) => {
  return state;
};

const success = (state, action) => {
  return state.update('lazy', (value) => action.payload);
};

const actionHandlers = {
  [actionTypes.LAZY_REQUEST]: request,
  [actionTypes.LAZY_SUCCESS]: success,
};

const LazyReducer = createReducer<LazyModel>(actionHandlers, LazyInitialState);
export { LazyReducer }