import { createActionTypes } from 'base/shared/CreateActionType';

export const ActionTypes: Map<string, string> = createActionTypes([
  'SUM',
  'CLEAN',
  'RESULT',
  'DIVIDE',
  'PERCENT',
  'MULTIPLY',
  'SUBSTRACT',
  'CHANGE_SIGN',
  'INPUT_NUMBER',
  'INPUT_DECIMAL',
  'INPUT_OPERATOR',
  'INPUT_OPERATION'
]);
