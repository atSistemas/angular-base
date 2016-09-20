import { TypedRecord } from 'typed-immutable-record';
import { makeTypedFactory } from 'typed-immutable-record';

export interface MainModelInterface {
  mainValue: any[];
};

export interface MainModel extends TypedRecord<MainModel>,
  MainModelInterface {
};

const MainModelFactory = makeTypedFactory<MainModelInterface, MainModel>({
  mainValue: []
});

export const InitialState = MainModelFactory();
