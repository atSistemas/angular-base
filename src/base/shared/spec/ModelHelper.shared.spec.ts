import { expect } from 'chai'
import { Map, Record } from 'immutable'

import { generateMap } from '../ModelHelper'

describe('shared / model-helper', () => {

  interface IMock {
    prop1: string
    prop2: string
  }

  const MockModel: Record.Factory<IMock> = Record<IMock>({
    prop1: '',
    prop2: ''
  })

  describe('generateMap', () => {

    const mockData: IMock[] = [
      { prop1: 'value10', prop2: 'value10' },
      { prop1: 'value11', prop2: 'value21' },
      { prop1: 'value12', prop2: 'value22' }
    ]

    it('should return an Immutable Map', () => {
      const expectedMap = Map([
        [0, new MockModel(mockData[0])],
        [1, new MockModel(mockData[1])],
        [2, new MockModel(mockData[2])]
      ])

      expect(generateMap(mockData, MockModel).toObject()).to.deep.equal(expectedMap.toObject())
    })
  })
})
