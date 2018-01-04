import { createSelector } from '@ngrx/store';

import { State } from 'base/state';

export const selectDisplay = (state: State) => state.calculator.display;
