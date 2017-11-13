import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../actionTypes';

@Injectable()
export class CalculatorActions {

  public inputNumber(value): Action {
    return {
      type: ActionTypes.INPUT_NUMBER,
      payload: {
        value
      }
    };
  }

  public inputOperation(value): Action {
    return {
      type: ActionTypes.INPUT_OPERATION,
      payload: {
        value
      }
    };
  }

  public inputDecimal(): Action {
    return {
      type: ActionTypes.INPUT_DECIMAL
    };
  }

  public inputOperator(operator): Action {
    return {
      type: ActionTypes.INPUT_OPERATOR,
      payload: {
        operator
      }
    };
  }

  public result(operator?): Action {
    return {
      type: ActionTypes.RESULT
    };
  }

};