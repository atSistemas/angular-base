import { createReducer } from 'base';
import { ActionTypes } from '../action-types';
import { InitialState, MainModelInterface } from '../models';

const click = (state) => {
  return state.update('main', (value) => 'eooo');
};

const request = (state, data) => {
  return state;
};

const login = (state, data) => {
  return state;
};

const success = (state, action) => {
  return Object.assign({}, state, {
       main: action.payload
     });
};

const actionHandlers = {
  [ActionTypes.CLICK]: click,
  [ActionTypes.LOGIN]: login,
  [ActionTypes.MAIN_REQUEST]: request,
  [ActionTypes.MAIN_SUCCESS]: success,
};

const MainReducer = createReducer<MainModelInterface>(actionHandlers, InitialState);

export { MainReducer }
