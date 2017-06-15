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

export const InitialState = makeTypedFactory<CalculatorModel, CalculatorState>({
  display: 0,
  operator: '',
  operation: '',
  prevValue:  0,
  nextValue:  0,
  newValue: false,
  resetDisplay: false
})();


// import { Record } from 'immutable';

// const CalculatorModel = new Record({
//   display:0,
//   operator:'',
//   operation:'',
//   prevValue: 0,
//   nextValue: 0,
//   newValue: false,
//   resetDisplay: false,
// });

// function setInitialState(initialState) {
//   return initialState.Calculator = new CalculatorModel();
// }

// export { CalculatorModel, setInitialState };
