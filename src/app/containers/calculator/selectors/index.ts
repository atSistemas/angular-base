import { createSelector } from '@ngrx/store'

import { IState } from 'base/state'

export const selectDisplay = (state: IState): number | string => (
  state.calculator.display
)
