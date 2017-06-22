import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';

export interface CalculatorModel {
  display?: number;
  operator?: string;
  operation?: string;
  prevValue?: number;
  nextValue?: number;
  newValue?: boolean;
  resetDisplay?: boolean;
};

export interface CalculatorState  extends TypedRecord<CalculatorState> {
  calculator: CalculatorModel;
}

export const CalculatorInitialState = makeTypedFactory<CalculatorModel, CalculatorState>({
  display: 0,
  operator: '',
  operation: '',
  prevValue:  0,
  nextValue:  0,
  newValue: false,
  resetDisplay: false
})();