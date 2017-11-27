import * as console from './shared/console';

export { console };

export { ENV } from './shared/Env';
export { Store } from '@ngrx/store';
export { State } from './state';
export { Action } from './models';

export { createReducer } from './shared/CreateReducer';
export { createActionType } from './shared/CreateActionType';
export { resolveRequestAction } from './shared/ResolveRequestAction';