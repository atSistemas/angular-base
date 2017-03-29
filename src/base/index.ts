import { Action } from 'redux';
import { createReducer } from './shared/CreateReducer';
import * as console from './shared/console';
import { ENV } from './shared/Env';
import { State } from 'base/state';
import { BaseService } from './services/BaseService';

export interface PayloadAction extends Action {
  payload?: any;
}

export { State, BaseService, createReducer, console, ENV };
