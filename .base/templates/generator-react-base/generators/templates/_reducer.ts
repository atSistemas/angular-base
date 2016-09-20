import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { <%= _.capitalize(name) %>ModelInterface, <%= _.capitalize(name) %>Model, InitialState } from '../models';
import { Store } from 'base';

const queryRequest = (state, data) =>{
  console.log('<%= name %> query request');
  return state;
}

const querySuccess = (state, action) =>{
  console.log('<%= name %> query sucess', action.payload);
  return state.update('<%= name %>Value', (value) => action.payload);
}

const queryError = (state, action) =>{
  console.error('<%= name %> query ERROR', action.payload);
  return;
}

const actionHandlers = {
  [actionTypes.<%= name.toUpperCase() %>_QUERY]: queryRequest,
  [actionTypes.<%= name.toUpperCase() %>_QUERY_SUCCESS]: querySuccess,
  [actionTypes.<%= name.toUpperCase() %>_QUERY_ERROR]: queryError
}

const <%= _.capitalize(name) %>Reducer = Store.createReducer<<%= _.capitalize(name) %>ModelInterface>(actionHandlers, InitialState);
export { <%= _.capitalize(name) %>Reducer }
