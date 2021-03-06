export interface Calculator {
  display: number | string;
  operator: string;
  operation: string;
  prevValue: number | string;
  nextValue: number | string;
  newValue: boolean;
  resetDisplay: boolean;
}

export const CalculatorModel: Calculator = {
  display: 0,
  operator: '',
  operation: '',
  prevValue:  0,
  nextValue:  0,
  newValue: false,
  resetDisplay: false
};