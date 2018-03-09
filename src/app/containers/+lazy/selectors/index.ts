import { IState } from 'base/state'

export const selectMessage = (state: IState): string => (
  state.lazy.message
)
