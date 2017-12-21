import { Record } from 'immutable';

export interface State {
  display: number;
  operator?: string;
  operation?: string;
  prevValue?: number;
  nextValue?: number;
  newValue?: boolean;
  resetDisplay?: boolean;
}

export const initialState = <State>{
  display: 0,
  operator: '',
  operation: '',
  prevValue:  0,
  nextValue:  0,
  newValue: false,
  resetDisplay: false
};