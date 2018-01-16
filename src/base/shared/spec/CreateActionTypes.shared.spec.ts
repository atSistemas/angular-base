import { expect } from 'chai';

import { BaseError } from '../BaseError';
import { createActionTypes } from '../CreateActionTypes';

describe('shared / CreateAction-Type', () => {

  describe('createActionType', () => {

    it('should return Action type object', () => {
      const actionTypes = createActionTypes([
        'LAZY_ERROR',
        'LAZY_REQUEST',
        'LAZY_SUCCESS'
      ]);
      expect(actionTypes.LAZY_ERROR).to.equal('LAZY_ERROR');
      expect(actionTypes.LAZY_REQUEST).to.equal('LAZY_REQUEST');
      expect(actionTypes.LAZY_SUCCESS).to.equal('LAZY_SUCCESS');
    });
  });
});