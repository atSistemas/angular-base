export interface MainModelInterface {
  id?: number | string;
  name?: string;
};

export interface MainState {
  main: MainModelInterface;
}

export const InitialState = <MainModelInterface> {
  main: {id: 22, name: 'Initial Name'}
};
