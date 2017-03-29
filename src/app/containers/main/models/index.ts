
export interface MainModel {
  id?: number | string;
  name?: string;
};

export interface MainState {
  main: MainModel;
}

export const InitialState = <MainModel> {
  main: { id: 22, name: 'Initial Name' }
};
