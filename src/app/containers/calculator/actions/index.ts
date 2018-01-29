import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../actionTypes';

@Injectable()
export class CalculatorActions {

  inputNumber(value: number): Action {
    return {
      type: ActionTypes.INPUT_NUMBER,
      payload: { value }
    };
  }

  inputOperation(value: string): Action {
    return {
      type: ActionTypes.INPUT_OPERATION,
      payload: { value }
    };
  }

  inputDecimal(): Action {
    return {
      type: ActionTypes.INPUT_DECIMAL
    };
  }

  inputOperator(operator: any): Action {
    return {
      type: ActionTypes.INPUT_OPERATOR,
      payload: { operator }
    };
  }

  result(): Action {
    return {
      type: ActionTypes.RESULT
    };
  }
}
