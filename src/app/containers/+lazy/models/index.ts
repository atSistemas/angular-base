import { TypedRecord } from 'typed-immutable-record';
import { makeTypedFactory } from 'typed-immutable-record';

export interface LazyModelInterface {
  lazy: String;
};

export interface LazyModel extends TypedRecord<LazyModel>,
  LazyModelInterface {
};

const LazyModelFactory = makeTypedFactory<LazyModelInterface, LazyModel>({
  lazy: 'Lazy view!',
});

export const InitialState = LazyModelFactory();