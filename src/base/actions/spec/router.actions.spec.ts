import { IAction } from 'base/models/action'
import { expect } from 'chai'

import { IRouterActionPayload, RouterActions, RouterActionsTypes } from '../router.actions'

describe('Actions', () => {

  describe('Router actions', () => {
    let action: RouterActions
    const mock: IRouterActionPayload = {
      extras: {},
      path: ['somewhere'],
      query: {}
    }

    beforeEach(() => {
      action = new RouterActions()
    })

    it('"go" should create an action of RouterActionsTypes', () => {
      const expectedAction: IAction = {
        payload: mock,
        type: RouterActionsTypes.GO
      }
      expect(action.go(mock)).to.deep.equal(expectedAction)
    })

    it('"back" should create an action of RouterActionsTypes', () => {
      const expectedAction: IAction = {
        type: RouterActionsTypes.BACK
      }
      expect(action.back()).to.deep.equal(expectedAction)
    })

    it('"forward" should create an action of RouterActionsTypes', () => {
      const expectedAction: IAction = {
        type: RouterActionsTypes.FORWARD
      }
      expect(action.forward()).to.deep.equal(expectedAction)
    })
  })
})
