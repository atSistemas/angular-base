import { ActionReducer, ActionReducerMap } from '@ngrx/store'
import { IAction,IState } from 'base'

import { ActionTypes } from '../actionTypes'
import { CalculatorModel, ICalculator } from '../models/calculator.model'

const calculate = (operator, prevValue, nextValue) => {
  const handlerOperator = {
    [ActionTypes.SUM]: () => prevValue + nextValue,
    [ActionTypes.DIVIDE]: () => prevValue / nextValue,
    [ActionTypes.MULTIPLY]: () => prevValue * nextValue,
    [ActionTypes.SUBSTRACT]: () => prevValue - nextValue
  }
  return operator ? handlerOperator[operator]() : prevValue
}

const result = (state: ICalculator): ICalculator => {
  const operator = state.operator
  const prevValue = state.prevValue
  const nextValue = state.nextValue
  const results = calculate(operator, prevValue, nextValue)

  return ({
    ...state,
    display: results,
    newValue: false,
    prevValue: results,
    resetDisplay: true
  })
}
const inputDecimal = (state: ICalculator, action: IAction): ICalculator => {
  const value = `${state.prevValue}.`
  return ({
    ...state,
    display: value,
    newValue: false,
    prevValue: value
  })
}
const inputNumber = (state: ICalculator, action: IAction): ICalculator => {
  const selectedValue = action.payload.value
  const newValue = state.newValue
  const prevValue = (newValue) ? state.nextValue : state.prevValue
  const value = parseFloat(`${prevValue}${selectedValue}`)

  return ({
    ...state,
    display: value,
    resetDisplay: false,
    [newValue ? 'nextValue' : 'prevValue']: value
  })
}
const inputOperation = (state: ICalculator, action: IAction): ICalculator => {
  let value = 0
  const operation = action.payload.value
  const prevValue = state.prevValue
  switch (operation) {
    case ActionTypes.PERCENT:
      value = prevValue as number / 100
      return ({
        ...state,
        display: value,
        prevValue: value
      })
    case ActionTypes.CLEAN:
      value = 0
      return ({
        ...state,
        display: value,
        nextValue: value,
        prevValue: value,
        resetDisplay: true
      })
    case ActionTypes.CHANGE_SIGN:
      value = (Math.sign(prevValue as number) === 1) ?
        -Math.abs(prevValue as number) : Math.abs(prevValue as number)
      return ({
        ...state,
        display: value,
        prevValue: value
      })
    default:
      break
  }
}
const inputOperator = (state: ICalculator, action: IAction): ICalculator => {
  const currentOperator = action.payload.operator
  const prevOperator = state.operator
  const prevValue = state.prevValue
  const nextValue = state.nextValue
  const newValue = state.newValue
  const results = newValue ?
    calculate(prevOperator, prevValue, nextValue) : prevValue

  return ({
    ...state,
    display: results,
    newValue: true,
    nextValue: 0,
    operator: currentOperator,
    prevValue: results,
    resetDisplay: true
  })
}

const actionHandler: Map<string, any> = new Map<string, any>([
  [ActionTypes.RESULT, result],
  [ActionTypes.INPUT_DECIMAL, inputDecimal],
  [ActionTypes.INPUT_NUMBER, inputNumber],
  [ActionTypes.INPUT_OPERATION, inputOperation],
  [ActionTypes.INPUT_OPERATOR, inputOperator]
])

export function CalculatorReducer (state: ICalculator = CalculatorModel, action: IAction) {
  const handler = actionHandler.get(action.type)
  return handler ? handler(state, action) : state
}
