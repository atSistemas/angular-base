import { createActionType } from 'base';

export const actionTypes = createActionType([
  'LAZY_ERROR',
  'LAZY_REQUEST',
  'LAZY_SUCCESS'
]);