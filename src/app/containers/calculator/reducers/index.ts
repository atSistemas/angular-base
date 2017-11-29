import { createReducer } from 'base';
import { ActionTypes } from '../actionTypes';
import * as CalculatorModel from '../models';
import { Action, State } from 'base';
import { ActionReducer, ActionReducerMap } from '@ngrx/store';
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
      const newValue = state.get('newValue');
      const prevValue = (newValue) ? state.get('nextValue') : state.get('prevValue');
      const value = parseFloat(`${prevValue}${selectedValue}`);
      if (newValue) {
        return state
          .set('display', value)
          .set('nextValue', value)
          .set('resetDisplay', false);
      } else {
        return state
          .set('display', value)
          .set('prevValue', value)
          .set('resetDisplay', false);
      }
    }
    case ActionTypes.RESULT : {

      const operator = state.get('operator');
      const prevValue = state.get('prevValue');
      const nextValue = state.get('nextValue');
      const results = calculate(operator, prevValue, nextValue);
      return state
        .set('newValue', false)
        .set('display', results)
        .set('prevValue', results)
        .set('resetDisplay', true);
    }
    case ActionTypes.INPUT_DECIMAL: {

      const value = `${state.get('prevValue')}.`;
      return state
        .set('display', value)
        .set('newValue', false)
        .set('prevValue', value);
    }

    case ActionTypes.INPUT_OPERATION: {

      let value = 0;
      const operation = action.payload.value;
      const prevValue = state.get('prevValue');
      switch (operation) {
        case ActionTypes.PERCENT:
          value = prevValue / 100;
          return state
            .set('display', value)
            .set('prevValue', value);
        case ActionTypes.CLEAN:
          value = 0;
          return state
            .set('display', value)
            .set('prevValue', value)
            .set('nextValue', value)
            .set('resetDisplay', true);
        case ActionTypes.CHANGE_SIGN:
          value = (Math.sign(prevValue) === 1) ?
            -Math.abs(prevValue) : Math.abs(prevValue);
          return state
            .set('display', value)
            .set('prevValue', value);
        default:
          break;
      }
    }
    case ActionTypes.INPUT_OPERATOR: {

      const currentOperator = action.payload.operator;
      const prevOperator = state.get('operator');
      const prevValue = state.get('prevValue');
      const nextValue = state.get('nextValue');
      const newValue = state.get('newValue');

      const results = (newValue) ?
        calculate(prevOperator, prevValue, nextValue) : prevValue;
    
      return state
      .set('nextValue', 0)
      .set('newValue', true)
      .set('display', results)
      .set('prevValue', results)
      .set('resetDisplay', true)
      .set('operator', currentOperator);
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