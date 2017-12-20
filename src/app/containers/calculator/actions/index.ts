import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../actionTypes';

@Injectable()
export class CalculatorActions {

  public inputNumber(value: any): Action {
    return {
      type: ActionTypes.get('INPUT_NUMBER'),
      payload: {
        value
      }
    };
  }

  public inputOperation(value: any): Action {
    return {
      type: ActionTypes.get('INPUT_OPERATION'),
      payload: {
        value
      }
    };
  }

  public inputDecimal(): Action {
    return {
      type: ActionTypes.get('INPUT_DECIMAL')
    };
  }

  public inputOperator(operator: any): Action {
    return {
      type: ActionTypes.get('INPUT_OPERATOR'),
      payload: {
        operator
      }
    };
  }

  public result(operator?: any): Action {
    return {
      type: ActionTypes.get('RESULT')
    };
  }
}