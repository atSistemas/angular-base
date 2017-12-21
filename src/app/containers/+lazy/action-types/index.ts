import { createActionTypes } from 'base/shared/CreateActionType';

export const ActionTypes: Map<string, string> = createActionTypes([
  'LAZY_ERROR',
  'LAZY_REQUEST',
  'LAZY_SUCCESS'
]);
