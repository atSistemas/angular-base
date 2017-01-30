import { Action } from 'redux';

export interface PayloadAction extends Action {
  payload?: any;
}

import * as console from './shared/console';
import { ENV } from './shared/Env';

export { console, ENV };
