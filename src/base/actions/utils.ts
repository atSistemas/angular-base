import { Action } from '@ngrx/store';

export const concatActions = (...concat: Array<Action | ((response: Action) => Action)>): Action =>
  ({
    type: 'CONCATENATED_ACTION',
    payload: {
      concat
    }
  });
