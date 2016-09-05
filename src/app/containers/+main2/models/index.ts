import { TypedRecord } from 'typed-immutable-record';
import { makeTypedFactory } from 'typed-immutable-record';

export interface MainModelInterface {
  main: String;
};

export interface MainModel extends TypedRecord<MainModel>,
  MainModelInterface {
};

const MainModelFactory = makeTypedFactory<MainModelInterface, MainModel>({
  main: 'Maaaain!'
});

export const InitialState = MainModelFactory();
