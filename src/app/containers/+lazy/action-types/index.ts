import { createActionType } from 'base';

export const ActionTypes = createActionType([
  'LAZY_ERROR',
  'LAZY_REQUEST',
  'LAZY_SUCCESS'
]);