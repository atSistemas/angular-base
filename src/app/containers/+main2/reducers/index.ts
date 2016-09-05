import { Action } from 'redux';
import { Types } from '../types';
import { MainModel, InitialState } from '../models';

export function MainReducer(
  state: MainModel = InitialState,
  action: Action): MainModel {

  switch (action.type) {
    case Types.MAIN_CONTAINER:
      return state.update('main', (value) => "eooo");

   default:
     return state;
 }
};
