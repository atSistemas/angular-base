import { Action, State } from 'base';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { Calculator, CalculatorModel } from '../models/calculator.model';

const calculate = (operator, prevValue, nextValue) => {
  const handlerOperator = {
    [ActionTypes.SUM]: () => prevValue + nextValue,
    [ActionTypes.DIVIDE]: () => prevValue / nextValue,
    [ActionTypes.MULTIPLY]: () => prevValue * nextValue,
    [ActionTypes.SUBSTRACT]: () => prevValue - nextValue
  };
  return operator ? handlerOperator[operator]() : prevValue;
};

const result = (state: Calculator): Calculator => {
  const operator = state.operator;
  const prevValue = state.prevValue;
  const nextValue = state.nextValue;
  const results = calculate(operator, prevValue, nextValue);

  return ({
    ...state,
    newValue: false,
    display: results,
    prevValue: results,
    resetDisplay: true
  });
};
const inputDecimal = (state: Calculator, action: Action): Calculator => {
  const value = `${state.prevValue}.`;
  return ({
    ...state,
    display: value,
    newValue: false,
    prevValue: value
  });
};
const inputNumber = (state: Calculator, action: Action): Calculator => {
  const selectedValue = action.payload.value;
  const newValue = state.newValue;
  const prevValue = (newValue) ? state.nextValue : state.prevValue;
  const value = parseFloat(`${prevValue}${selectedValue}`);
  console.log(value);
  return ({
    ...state,
    display: value,
    resetDisplay: false,
    [newValue ? 'nextValue' : 'prevValue']: value
  });
};
const inputOperation = (state: Calculator, action: Action): Calculator => {
  let value = 0;
  const operation = action.payload.value;
  const prevValue = state.prevValue;
  switch (operation) {
    case ActionTypes.PERCENT:
      value = prevValue as number / 100;
      return ({
        ...state,
        display: value,
        prevValue: value
      });
    case ActionTypes.CLEAN:
      value = 0;
      return ({
        ...state,
        display: value,
        prevValue: value,
        nextValue: value,
        resetDisplay: true
      });
    case ActionTypes.CHANGE_SIGN:
      value = (Math.sign(prevValue as number) === 1) ?
        -Math.abs(prevValue as number) : Math.abs(prevValue as number);
      return ({
        ...state,
        display: value,
        prevValue: value
      });
    default:
      break;
  }
};
const inputOperator = (state: Calculator, action: Action): Calculator => {
  const currentOperator = action.payload.operator;
  const prevOperator = state.operator;
  const prevValue = state.prevValue;
  const nextValue = state.nextValue;
  const newValue = state.newValue;
  const results = newValue ?
    calculate(prevOperator, prevValue, nextValue) : prevValue;

  return ({
    ...state,
    nextValue: 0,
    newValue: true,
    display: results,
    prevValue: results,
    resetDisplay: true,
    operator: currentOperator
  });
};

const actionHandler: Map<string, any> = new Map<string, any>([
  [ActionTypes.RESULT, result],
  [ActionTypes.INPUT_DECIMAL, inputDecimal],
  [ActionTypes.INPUT_NUMBER, inputNumber],
  [ActionTypes.INPUT_OPERATION, inputOperation],
  [ActionTypes.INPUT_OPERATOR, inputOperator]
]);

export function CalculatorReducer(state: Calculator = CalculatorModel, action: Action) {
  const handler = actionHandler.get(action.type);
  return handler ? handler(state, action) : state;
}