import { Injectable } from '@angular/core'
import { IAction } from 'base'
import { ActionTypes } from '../actionTypes'

@Injectable()
export class CalculatorActions {

  public inputNumber (value: number): IAction {
    return {
      payload: { value },
      type: ActionTypes.INPUT_NUMBER
    }
  }

  public inputOperation (value: string): IAction {
    return {
      payload: { value },
      type: ActionTypes.INPUT_OPERATION
    }
  }

  public inputDecimal (): IAction {
    return {
      type: ActionTypes.INPUT_DECIMAL
    }
  }

  public inputOperator (operator: any): IAction {
    return {
      payload: { operator },
      type: ActionTypes.INPUT_OPERATOR
    }
  }

  public result (): IAction {
    return {
      type: ActionTypes.RESULT
    }
  }
}
