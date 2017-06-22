import * as console from './shared/console';

export { console };
export { State } from './state';
export { ENV } from './shared/Env';
export { Store } from '@ngrx/store';
export { Action } from './interfaces';
//FIXME
// export { typeBuilder } from './shared/TypeHelper';
export { createReducer } from './shared/CreateReducer';
export { createActionType } from './shared/CreateActionType';
export { resolveRequestAction } from './shared/ResolveRequestAction';