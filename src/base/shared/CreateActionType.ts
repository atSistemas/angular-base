import { BaseError } from './BaseError';

export function createActionType<K extends string>(ActionTypes: K[]): { [P in K]: string } {
  if (!ActionTypes)  throw new BaseError('You should pass an array of actions');

  const actions = {};
  ActionTypes.forEach((type: string) => {
    actions[type] = type;
  });

  return Object.freeze(actions) as Readonly<{ [P in K]: string }>;
}
