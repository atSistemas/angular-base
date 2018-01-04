import { Action } from 'base';
import { ActionTypes } from '../actionTypes';
import { Lazy, LazyModel } from '../models/lazy.model';

const loadMessage = (state: Lazy, action: Action): Lazy => ({
  ...state,
  message: action.payload.message
});

const actionHandler: Map<string, any> = new Map<string, any>([
  [ActionTypes.get('LOAD_MESSAGE'), loadMessage]
]);

export function LazyReducer(state: Lazy = LazyModel, action: Action) {
  const handler = actionHandler.get(action.type);
  return handler ? handler(state, action) : state;
}