import { TypedRecord, makeTypedFactory } from 'typed-immutable-record';

export interface MainModel {
  id?: number | string;
  name?: string;
};

export interface MainState  extends TypedRecord<MainState> {
  main: MainModel;
}

export const InitialState = makeTypedFactory<MainModel, MainState>({
  id: 22,
  name: 'Initial Name'
})();
