import { Record } from 'immutable';

export interface Main {
  id?: number | string;
  name?: string;
};

export const MainModel = Record<Main>({
  id: 22,
  name: 'Initial Name'
});