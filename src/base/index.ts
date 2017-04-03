import { Store } from '@ngrx/store';

import { State } from './state';
import { Action } from './interfaces';
import { ENV } from './shared/Env';
import { EnvData } from '../conf/envData';
import * as console from './shared/console';
import { createReducer } from './shared/CreateReducer';

export { Store, State, Action, createReducer, console, ENV, EnvData };
