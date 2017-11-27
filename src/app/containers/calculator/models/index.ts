import { Record } from 'immutable';

export interface Calculator {
  display?: number;
  operator?: string;
  operation?: string;
  prevValue?: number;
  nextValue?: number;
  newValue?: boolean;
  resetDisplay?: boolean;
}

export const CalculatorModel =  Record({
  display: 0,
  operator: '',
  operation: '',
  prevValue:  0,
  nextValue:  0,
  newValue: false,
  resetDisplay: false
});
