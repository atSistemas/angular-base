import { Record } from 'immutable';

export interface Lazy {
  lazy?: String;
};

export const LazyModel =  Record<Lazy>({
  lazy: 'Lazy view!'
});