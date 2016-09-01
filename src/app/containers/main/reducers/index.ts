import { Action } from 'redux';

import { actionTypes } from '../action-types';
import { MainModelInterface, MainModel, InitialState } from '../models';
import CreateReducer from '../../../../base/shared/CreateReducer';

const click = (state) =>
  state.update('main', (value) => "eooo");

const actionHandlers = {
  [actionTypes.CLICK]: click
}

const MainReducer = CreateReducer<MainModelInterface>(actionHandlers, InitialState);
export { MainReducer }
