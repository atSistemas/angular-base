import { State } from 'base/state';

import { Lazy } from '../models/lazy.model';

export const selectMessage = (state: State): string => (
  state.lazy.message
);