import { expect } from 'chai';
import { Observable } from 'base/conf/rx';
import { Action } from '../../models/action';

import { resolveRequestAction } from '../ResolveRequestAction';

describe('shared / ResolveRequestAction', () => {
  describe('resolveRequestAction', () => {
    const resultAction: Action = {
      type: 'TEST_SUCCESS',
      payload: { response: 'testing' },
    };
    const mockAction: Action = {
      type: 'TEST_REQUEST',
    };
    let observable: Observable<Action>;

    beforeEach(() => {
      observable = resolveRequestAction(mockAction, 'testing', 'SUCCESS');
    });

    it('should return an Observable instance', () => {
      expect(observable).to.be.instanceOf(Observable);
    });

    it('should deep-equal mock action', async () => {
      let value;
      observable.subscribe(_value => value = _value);
      expect(value).to.deep.equal(resultAction);
    });
  });
});
