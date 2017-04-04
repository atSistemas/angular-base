import { ActionReducer } from '@ngrx/store';

export function RequestMiddleware(next: ActionReducer<any>): ActionReducer<any> {
  return  (state, action ) => {
    return next(state, action);
  };
}