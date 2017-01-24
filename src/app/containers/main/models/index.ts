export interface MainModelInterface {
  readonly id?: number | string;
  readonly name?: string;
};

export interface MainState {
  main: MainModelInterface;
}

export const InitialState: MainState = {
  main: { id: 22, name: 'Initial Name' },
};
