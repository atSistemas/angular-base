export const createActionTypes = (types: string[]): Map<string, string> => (
  types.reduce((acc: Map<string, string>, type: string) => (
    acc.set(type, type)
  ), new Map<string, string>())
);