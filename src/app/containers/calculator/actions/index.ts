
import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../actionTypes';
// import { MainService } from '../services/main-service';

@Injectable()
export class CalculatorActions {

  constructor(
    // private mainService: MainService,
  ) { }

  // public mainRequest(): Action {
  //   return {
  //     type: ActionTypes.MAIN_REQUEST,
  //     payload: {
  //       request: this.mainService.getData(),
  //     }
  //   };
  // }

  public inputNumber(value): Action {
    return {
      type: ActionTypes.INPUT_NUMBER,
      payload:{
        value
      }
    };
  }

  public inputOperation(value): Action {
    return {
      type: ActionTypes.INPUT_OPERATION,
      payload:{
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
      payload:{
        operator
      }
    };
  }

  public result(operator): Action {
    return {
      type: ActionTypes.RESULT,
      payload:{
        operator
      }
    };
  }

};