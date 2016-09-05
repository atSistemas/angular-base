import { TypedRecord } from 'typed-immutable-record';
import { makeTypedFactory } from 'typed-immutable-record';

export interface Main2ModelInterface {
  main2: String;
};

export interface Main2Model extends TypedRecord<MainModel>,
  Main2ModelInterface {
};

const Main2ModelFactory = makeTypedFactory<Main2ModelInterface, Main2Model>({
  main2: 'Maaaain 2!'
});

export const InitialState = Main2ModelFactory();
