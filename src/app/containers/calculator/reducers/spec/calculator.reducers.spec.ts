import { expect } from 'chai'
import { CalculatorReducer } from '../'
import { ActionTypes } from '../../actionTypes'
import { CalculatorModel as model } from '../../models/calculator.model'

describe('Calculator', () => {
  describe('reducer', () => {
    it('should input an Operator', () => {
      const operator = 'MULTIPLY'
      const action = { type: ActionTypes.INPUT_OPERATOR, payload: { operator } }
      const reducer = CalculatorReducer(model, action)
      const expectedData = reducer.operator

      expect(expectedData).to.equal(operator)
    })

    it('should input a Number', () => {
      const value = 2222
      const action = { type: ActionTypes.INPUT_NUMBER, payload: { value } }
      const reducer = CalculatorReducer(model, action)
      const expectedData = reducer.display

      expect(expectedData).to.equal(value)
    })

    it('should input a Decimal', () => {
      const value = 2222
      const decimal = value + '.'
      const modelWithData = Object.assign(model, { prevValue: value })
      const action = { type: ActionTypes.INPUT_DECIMAL }
      const reducer = CalculatorReducer(modelWithData, action)
      const expectedData = reducer.display

      expect(expectedData).to.equal(decimal)
    })

    it('should Sum two numbers', () => {
      const numberA = 222
      const numberB = 333
      const modelWithData =
        Object.assign(model,
          { prevValue: numberA, nextValue: numberB, operator: ActionTypes.SUM })
      const action = { type: ActionTypes.RESULT }
      const reducer = CalculatorReducer(modelWithData, action)
      const expectedData = reducer.display

      expect(expectedData).to.equal(555)
    })

    it('should Substract numbers', () => {
      const numberA = 100
      const numberB = 2
      const modelWithData =
        Object.assign(model,
          { prevValue: numberA, nextValue: numberB, operator: ActionTypes.SUBSTRACT })
      const action = { type: ActionTypes.RESULT }
      const reducer = CalculatorReducer(model, action)
      const expectedData = reducer.display

      expect(expectedData).to.equal(98)
    })

    it('should Multiply numbers', () => {
      const numberA = 60
      const numberB = 53
      const modelWithData =
        Object.assign(model,
          { prevValue: numberA, nextValue: numberB, operator: ActionTypes.MULTIPLY })
      const action = { type: ActionTypes.RESULT }
      const reducer = CalculatorReducer(modelWithData, action)
      const expectedData = reducer.display

      expect(expectedData).to.equal(3180)
    })

    it('should Multiply numbers', () => {
      const numberA = 200
      const numberB = 50
      const modelWithData =
        Object.assign(model,
          { prevValue: numberA, nextValue: numberB, operator: ActionTypes.DIVIDE })
      const action = { type: ActionTypes.RESULT }
      const reducer = CalculatorReducer(modelWithData, action)
      const expectedData = reducer.display

      expect(expectedData).to.equal(4)
    })

    it('should reset Display', () => {
      const numberA = 200
      const numberB = 50
      const modelWithData =
        Object.assign(model,
          { prevValue: numberA, nextValue: numberB, operator: ActionTypes.DIVIDE })
      const action = {
        payload: { value: ActionTypes.CLEAN },
        type: ActionTypes.INPUT_OPERATION
      }
      const reducer = CalculatorReducer(model, action)
      const expectedData = reducer.display

      expect(expectedData).to.equal(0)
    })

    it('should convert to negative', () => {
      const numberA = 200
      const modelWithData =
        Object.assign(model,
          { prevValue: numberA, operator: ActionTypes.DIVIDE })
      const action = {
        payload: { value: ActionTypes.CHANGE_SIGN },
        type: ActionTypes.INPUT_OPERATION
      }
      const reducer = CalculatorReducer(model, action)
      const expectedData = reducer.display

      expect(expectedData).to.equal(-200)
    })

  })
})
