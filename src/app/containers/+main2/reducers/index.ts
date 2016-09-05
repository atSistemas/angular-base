import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { Main2ModelInterface, Main2Model, InitialState } from '../models';
import CreateReducer from '../../../../base/shared/CreateReducer';

const returnToMain = (state) => {
  console.log('return to main');
  return state;
}

const actionHandlers = {
  [actionTypes.MAIN_CONTAINER]: returnToMain
}

const Main2Reducer = CreateReducer<Main2ModelInterface>(actionHandlers, InitialState);
export { Main2Reducer }
