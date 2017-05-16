import { expect } from 'chai';
import { BaseError } from '../BaseError';

describe('shared / Errors', () => {

  describe('Error', () => {

    it('should be an Error prototype', () => {

      const err = new BaseError('foo');
      const isErr = err instanceof Error;
      expect(isErr).to.equal(true);

   });

    it('should have a name and error msg ', () => {

      const msg = 'test';
      const err = new BaseError(msg);
      expect(err.name).to.equal('Base Error');
      expect(err.msg).to.equal('[BASE ERROR] test');

    });
  });

});
