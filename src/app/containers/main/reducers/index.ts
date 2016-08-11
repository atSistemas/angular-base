import { Action } from 'redux';
import { Types } from '../types';
import { MainModel, InitialState } from '../models';

//TODO improve reducer with actionHandlers
export function MainReducer(
  state: MainModel = InitialState,
  action: Action): MainModel {

  switch (action.type) {
    case Types.CLICK:
      console.log('Hello from reducer!!!');
      return state.update('main', (value) => "eooo");

   default:
     return state;
 }
};
