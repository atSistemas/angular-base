import { Action } from 'redux';

import { State } from './state';
import { ENV } from './shared/Env';
import * as console from './shared/console';
import { createReducer } from './shared/CreateReducer';

export interface PayloadAction extends Action {
  payload?: any;
}

export { State, createReducer, console, ENV };
