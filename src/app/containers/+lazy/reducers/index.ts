import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { LazyModelInterface, LazyModel, InitialState } from '../models';
import { Store } from 'base';

const request = (state, data) =>{
  console.log('lazy requeeeeeeest!!!');
  return state;
}

const success = (state, action) =>{
  console.log('lazy sucesssssss!', action.payload);
  const data = action.payload;
  return state.update('lazy', (value) => action.payload);

}

const actionHandlers = {
  [actionTypes.LAZY_REQUEST]: request,
  [actionTypes.LAZY_SUCCESS]: success
}

const LazyReducer = Store.createReducer<LazyModelInterface>(actionHandlers, InitialState);
export { LazyReducer }
