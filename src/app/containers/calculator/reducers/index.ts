import { Action, State } from 'base';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';

import { ActionTypes } from '../actionTypes';
import { Calculator, CalculatorModel } from '../models/calculator.model';

const calculate = (operator, prevValue, nextValue) => {
  const handlerOperator = {
    [ActionTypes.get('SUM')]: () => prevValue + nextValue,
    [ActionTypes.get('DIVIDE')]: () => prevValue / nextValue,
    [ActionTypes.get('MULTIPLY')]: () => prevValue * nextValue,
    [ActionTypes.get('SUBSTRACT')]: () => prevValue - nextValue
  };
  return operator ? handlerOperator[operator]() : prevValue;
};

const result = (state, action) => {
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
const inputDecimal = (state, action) => {
  const value = `${state.prevValue}.`;
  return ({
    ...state,
    display: value,
    newValue: false,
    prevValue: value
  });
};
const inputNumber = (state, action) => {
  const selectedValue = action.payload.value;
  const newValue = state.newValue;
  const prevValue = (newValue) ? state.nextValue : state.prevValue;
  const value = parseFloat(`${prevValue}${selectedValue}`);

  return ({
    ...state,
    display: value,
    resetDisplay: false,
    [newValue ? 'nextValue' : 'prevValue']: value
  });
};
const inputOperation = (state, action) => {
  let value = 0;
  const operation = action.payload.value;
  const prevValue = state.prevValue;
  switch (operation) {
    case ActionTypes.get('PERCENT'):
      value = prevValue / 100;
      return ({
        ...state,
        display: value,
        prevValue: value
      });
    case ActionTypes.get('CLEAN'):
      value = 0;
      return ({
        ...state,
        display: value,
        prevValue: value,
        nextValue: value,
        resetDisplay: true
      });
    case ActionTypes.get('CHANGE_SIGN'):
      value = (Math.sign(prevValue) === 1) ?
        -Math.abs(prevValue) : Math.abs(prevValue);
      return ({
        ...state,
        display: value,
        prevValue: value
      });
    default:
      break;
  }
};
const inputOperator = (state, action) => {
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
  [ActionTypes.get('RESULT'), result],
  [ActionTypes.get('INPUT_DECIMAL'), inputDecimal],
  [ActionTypes.get('INPUT_NUMBER'), inputNumber],
  [ActionTypes.get('INPUT_OPERATION'), inputOperation],
  [ActionTypes.get('INPUT_OPERATOR'), inputOperator]
]);

export function CalculatorReducer(state: Calculator = CalculatorModel, action: Action) {
  const handler = actionHandler.get(action.type);
  return handler ? handler(state, action) : state;
}