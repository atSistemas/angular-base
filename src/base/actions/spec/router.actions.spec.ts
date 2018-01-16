import { Action } from 'base/models/action';
import { expect } from 'chai';

import { RouterActions, RouterActionsTypes, RouterActionPayload } from '../router.actions';

describe('actions', () => {

  describe('router actions', () => {
    let action: RouterActions;
    const mock: RouterActionPayload = {
      path: ['somewhere'],
      extras: {},
      query: {}
    };

    beforeEach(() => {
      action = new RouterActions();
    });

    it('GO should create an action of RouterActionsTypes', () => {
      const expectedAction: Action = {
        type: RouterActionsTypes.GO,
        payload: mock
      };
      expect(action.go(mock)).to.deep.equal(expectedAction);
    });

    it('BACK should create an action of RouterActionsTypes', () => {
      const expectedAction: Action = {
        type: RouterActionsTypes.BACK
      };
      expect(action.back()).to.deep.equal(expectedAction);
    });

    it('FORWARD should create an action of RouterActionsTypes', () => {
      const expectedAction: Action = {
        type: RouterActionsTypes.FORWARD
      };
      expect(action.forward()).to.deep.equal(expectedAction);
    });
  });
});