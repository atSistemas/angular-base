import { Observable } from 'base/conf/rx'
import { expect } from 'chai'
import { IAction } from '../../models/action'

import { resolveRequestAction } from '../ResolveRequestAction'

describe('shared / ResolveRequestAction', () => {
  describe('resolveRequestAction', () => {
    const resultAction: IAction = {
      payload: { response: 'testing' },
      type: 'TEST_SUCCESS'
    }
    const mockAction: IAction = {
      type: 'TEST_REQUEST'
    }
    let observable: Observable<IAction>

    beforeEach(() => {
      observable = resolveRequestAction(mockAction, 'testing', 'SUCCESS')
    })

    it('should return an Observable instance', () => {
      expect(observable).to.be.instanceOf(Observable)
    })

    it('should deep-equal mock action', async () => {
      let value
      observable.subscribe((actionValue) => value = actionValue)
      expect(value).to.deep.equal(resultAction)
    })
  })
})
