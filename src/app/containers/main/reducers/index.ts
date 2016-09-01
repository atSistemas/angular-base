import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { MainModelInterface, MainModel, InitialState } from '../models';
import CreateReducer from '../../../../base/shared/CreateReducer';

const click = (state) => {
  console.log('cliiiiick');
  state.update('main', (value) => "eooo");
}

const request = (state) => {
  console.log('requesssst');
}

const success = (state) =>{
  console.log('sucessss');
}

const actionHandlers = {
  [actionTypes.CLICK]: click,
  [actionTypes.MAIN_REQUEST]: request,
  [actionTypes.MAIN_SUCCESS]: success
}

const MainReducer = CreateReducer<MainModelInterface>(actionHandlers, InitialState);
export { MainReducer }
