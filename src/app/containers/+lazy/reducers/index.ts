import { createReducer } from 'base';
import { ActionTypes } from '../action-types';
import { LazyModel } from '../models';

const lazyRequest = Symbol(ActionTypes.get('LAZY_REQUEST'));
const lazySuccess = Symbol(ActionTypes.get('LAZY_SUCCESS'));

const request = state => {
  return state;
};

const success = (state, action) => {
  return state.update('lazy', () => action.payload);
};

export const actionHandlers = {
  lazyRequest: request,
  lazySuccess: success,
};

export const LazyReducer = createReducer(actionHandlers, new LazyModel());
