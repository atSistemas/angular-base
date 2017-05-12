import { expect } from 'chai';
import { createActionType } from '../CreateActionType';
import { BaseError } from '../BaseError';

describe('shared / CreateAction-Type', () => {

  describe('createActionType', () => {

    it('should return Action type object', () => {
      
      let ActionTypes = [
        'LAZY_ERROR',
        'LAZY_REQUEST',
        'LAZY_SUCCESS'
      ];
      let types = createActionType(ActionTypes);

      expect(types.LAZY_ERROR).to.equal('LAZY_ERROR');
      expect(types.LAZY_REQUEST).to.equal('LAZY_REQUEST');
      expect(types.LAZY_SUCCESS).to.equal('LAZY_SUCCESS');

    });

    it('should return exception BaseError', () => {
      
      expect(()=> createActionType(undefined)).to.throw(Error);  
      expect(()=> createActionType(undefined)).to.throw(Error);  
      expect(()=> createActionType(null)).to.throw(BaseError); 
      expect(()=> createActionType(null)).to.throw(BaseError); 
          
      try {createActionType(undefined);} catch (error) {expect(error.msg).to.equal('[BASE ERROR] You should pass an array of actions');}
      try {createActionType(null);} catch (error) {expect(error.msg).to.equal('[BASE ERROR] You should pass an array of actions');}
      
    });

  });
 
});
