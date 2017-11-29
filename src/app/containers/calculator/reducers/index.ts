import { ActionReducer, ActionReducerMap } from '@ngrx/store';
//import { createReducer } from 'base';
import { ActionTypes } from '../actionTypes';
import * as CalculatorModel from '../models';
import { Action, State } from 'base';

const calculate = (operator, prevValue, nextValue) => {
  const result = {
    [ActionTypes.SUM]: () => prevValue + nextValue,
    [ActionTypes.DIVIDE]: () => prevValue / nextValue,
    [ActionTypes.MULTIPLY]: () => prevValue * nextValue,
    [ActionTypes.SUBSTRACT]: () => prevValue - nextValue
  };
  return operator ? result[operator]() : prevValue;
};

export function CalculatorReducer(state: any = CalculatorModel.initialState, action: Action): CalculatorModel.State {
  switch (action.type) {
    case ActionTypes.INPUT_NUMBER: {

      const selectedValue = action.payload.value;
      const newValue = state.newValue;
      const prevValue = (newValue) ? state.nextValue : state.prevValue;
      const value = parseFloat(`${prevValue}${selectedValue}`);

      if (newValue) {
        return ({
          ...state,
          display: value,
          nextValue: value,
          resetDisplay: false
        });
      } else {
        return ({
          ...state,
          display: value,
          prevValue: value,
          resetDisplay: false
        });
      }
    }
    case ActionTypes.RESULT : {
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
    }
    case ActionTypes.INPUT_DECIMAL: {

      const value = `${state.prevValue}.`;
      return ({
        ...state,
        display: value,
        newValue: false,
        prevValue: value
      });
    }

    case ActionTypes.INPUT_OPERATION: {

      let value = 0;
      const operation = action.payload.value;
      const prevValue = state.prevValue;
      switch (operation) {
        case ActionTypes.PERCENT:
          value = prevValue / 100;
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
    }
    case ActionTypes.INPUT_OPERATOR: {

      const currentOperator = action.payload.operator;
      const prevOperator = state.operator;
      const prevValue = state.prevValue;
      const nextValue = state.nextValue;
      const newValue = state.newValue;

      const results = (newValue) ?
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
    }
    default: {
      return state;
    }
  }
}
/*
const actionHandlers = () => {
  return {
    [ActionTypes.INPUT_NUMBER]: (state) => state,
  };
};
const leches = actionHandlers();
export const CalculatorReducer = createReducer<CalculatorModel.State>(leches, CalculatorModel.initialState);
*/