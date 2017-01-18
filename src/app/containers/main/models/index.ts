import { TypedRecord } from 'typed-immutable-record';
import { makeTypedFactory } from 'typed-immutable-record';

export interface MainModelInterface {
  main: any[];
};

export interface MainModel extends TypedRecord<MainModel>,
  MainModelInterface {
};

const MainModelFactory = makeTypedFactory<MainModelInterface, MainModel>({
  main: [],
});

export const InitialState = MainModelFactory();
