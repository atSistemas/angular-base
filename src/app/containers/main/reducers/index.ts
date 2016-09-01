import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { MainModelInterface, MainModel, InitialState } from '../models';
import CreateReducer from '../../../../base/shared/CreateReducer';

const click = (state) => {
  console.log('cliiiik');
  return state.update('main', (value) => "eooo");
}

const request = (state, data) =>{
  console.log('requeeeeeeest!!!');
  return state;
}

const success = (state, action, data) =>{
  console.log('sucesssssss!');
  return state.update('main', (value) => data);
}

const actionHandlers = {
  [actionTypes.CLICK]: click,
  [actionTypes.MAIN_REQUEST]: request,
  [actionTypes.MAIN_SUCCESS]: success
}

const MainReducer = CreateReducer<MainModelInterface>(actionHandlers, InitialState);
export { MainReducer }
