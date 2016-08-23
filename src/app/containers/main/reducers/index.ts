import { Action } from 'redux';

import { Types } from '../types';
import { MainTypes, MainModel, InitialState } from '../models';
import CreateReducer from '../../../../base/shared/CreateReducer';

const click = (state) =>
  state.update('main', (value) => "eooo");

const actionHandlers = {
  [Types.CLICK]: click
}

export default CreateReducer<MainTypes>(actionHandlers, InitialState);
