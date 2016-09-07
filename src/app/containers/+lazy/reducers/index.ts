import { Action } from 'redux';
import { actionTypes } from '../action-types';
import { LazyModelInterface, LazyModel, InitialState } from '../models';
import CreateReducer from '../../../../base/shared/CreateReducer';

const returnToMain = (state) => {
  console.log('return to main');
  return state;
}

const actionHandlers = {
  [actionTypes.MAIN_CONTAINER]: returnToMain
}

const Main2Reducer = CreateReducer<LazyModelInterface>(actionHandlers, InitialState);
export { Main2Reducer }
