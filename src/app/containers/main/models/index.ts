
export interface MainModel {
  id?: number | string;
  name?: string;
};

export interface MainState {
  main: MainModel;
}

export const InitialState = <MainModel>
  { id: 22, name: 'Initial Name' };
