import CreateReducer from '../../../../base/shared/CreateReducer';
import { Action } from 'redux';
import { Types } from '../types';
import { MainTypes, MainModel, InitialState } from '../models';

const click = (state) =>
  state.update('main', (value) => "eooo");

const actionHandlers = {
  [Types.CLICK]: click
}

export default CreateReducer<MainTypes>(actionHandlers, InitialState);
