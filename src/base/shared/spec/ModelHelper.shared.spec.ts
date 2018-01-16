import { Record, Map } from 'immutable';
import { expect } from 'chai';

import { generateMap } from '../ModelHelper';

describe('shared / model-helper', () => {

  interface Mock {
    prop1: string;
    prop2: string;
  }

  const MockModel: Record.Factory<Mock> = Record<Mock>({
    prop1: '',
    prop2: ''
  });

  describe('generateMap', () => {

    const mockData: Mock[] = [
      { prop1: 'value10', prop2: 'value10' },
      { prop1: 'value11', prop2: 'value21' },
      { prop1: 'value12', prop2: 'value22' }
    ];

    it('should return an Immutable Map', () => {
      const expectedMap = Map([
        [0, new MockModel(mockData[0])],
        [1, new MockModel(mockData[1])],
        [2, new MockModel(mockData[2])]
      ]);

      expect(generateMap(mockData, MockModel).toObject()).to.deep.equal(expectedMap.toObject());
    });
  });
});