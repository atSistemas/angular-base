import { createReducer } from 'base';
import { actionTypes } from '../action-types';
import { InitialState, LazyModelInterface } from '../models';

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

const LazyReducer = createReducer<LazyModelInterface>(actionHandlers, InitialState);
export { LazyReducer }