import { expect } from 'chai'
import { CalculatorActions } from '../'
import { ActionTypes } from '../../actionTypes'

const actions = new CalculatorActions()

describe('Calculator: actions', () => {
  it('"inputNumber" should return action object', () => {
    const inputNumber = actions.inputNumber(3)
    const expected = { type: ActionTypes.INPUT_NUMBER, payload: { value: 3 } }
    expect(expected).to.deep.equal(inputNumber)
  })

  it('"inputOperation" should return action object', () => {
    const inputOperation = actions.inputOperation('PERCENT')
    const expected = { type: ActionTypes.INPUT_OPERATION, payload: { value: 'PERCENT' } }
    expect(expected).to.deep.equal(inputOperation)
  })

  it('"inputDecimal" should return action object', () => {
    const inputNumber = actions.inputDecimal()
    const expected = { type: ActionTypes.INPUT_DECIMAL }
    expect(expected).to.deep.equal(inputNumber)
  })

  it('"inputOperator" should return action object', () => {
    const inputOperator = actions.inputOperator('+')
    const expected = { type: ActionTypes.INPUT_OPERATOR, payload: { operator: '+' } }
    expect(expected).to.deep.equal(inputOperator)
  })

  it('"result" should return action object', () => {
    const result = actions.result()
    const expected = { type: ActionTypes.RESULT }
    expect(expected).to.deep.equal(result)
  })
})
