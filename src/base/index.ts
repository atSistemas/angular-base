import { Action } from 'redux';
import { createReducer } from './shared/CreateReducer';
import * as console from './shared/console';
import { ENV } from './shared/Env';

export interface PayloadAction extends Action {
  payload?: any;
}

export { createReducer, console, ENV };
