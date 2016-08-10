import { TypedRecord } from 'typed-immutable-record';
import { makeTypedFactory } from 'typed-immutable-record';

export interface MainTypes {
  main: String;
};

export interface MainModel extends TypedRecord<MainModel>,
  MainTypes {
};

const MainFactory = makeTypedFactory<MainTypes, MainModel>({
  main: 'Maaaain!'
});

export const InitialState = MainFactory();
