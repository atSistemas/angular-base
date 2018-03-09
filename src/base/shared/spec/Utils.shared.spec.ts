import { expect } from 'chai'

import { getActionPrefix } from '../Utils'

describe('shared / Utils', () => {
  describe('getActionPrefix', () => {
    it('should return only the prefix of the action', () => {
      const action = 'DO_TEST_SUFFIX'
      expect(getActionPrefix(action)).to.equal('DO_TEST')
    })
  })
})
