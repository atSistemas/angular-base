import { expect } from 'chai';

import { createObservableAction } from '../CreateObservableAction';
import { Observable } from 'base/conf/rx';
import { Action } from '../../models/action';

describe('shared / CreateObservableAction', () => {

  describe('createObservableAction', () => {

    const mockAction: Action = {
      type: 'TEST',
      payload: { value: 123 },
    };

    let observable: Observable<Action>;

    beforeEach(() => {
      observable = createObservableAction(mockAction);
    });

    it('should be an Observable instance', () => {
      expect(observable).to.be.instanceOf(Observable);
    });
  });
});
