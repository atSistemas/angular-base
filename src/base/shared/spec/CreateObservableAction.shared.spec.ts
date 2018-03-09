import { expect } from 'chai'

import { Observable } from 'base/conf/rx'
import { IAction } from '../../models/action'
import { createObservableAction } from '../CreateObservableAction'

describe('shared / CreateObservableAction', () => {

  describe('createObservableAction', () => {

    const mockAction: IAction = {
      payload: { value: 123 },
      type: 'TEST'
    }

    let observable: Observable<IAction>

    beforeEach(() => {
      observable = createObservableAction(mockAction)
    })

    it('should be an Observable instance', () => {
      expect(observable).to.be.instanceOf(Observable)
    })
  })
})
