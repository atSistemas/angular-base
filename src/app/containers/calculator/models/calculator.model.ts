export interface ICalculator {
  display: number | string
  operator: string
  operation: string
  prevValue: number | string
  nextValue: number | string
  newValue: boolean
  resetDisplay: boolean
}

export const CalculatorModel: ICalculator = {
  display: 0,
  newValue: false,
  nextValue:  0,
  operation: '',
  operator: '',
  prevValue:  0,
  resetDisplay: false
}
