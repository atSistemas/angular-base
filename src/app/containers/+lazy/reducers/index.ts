import { IAction } from 'base'
import { ActionTypes } from '../actionTypes'
import { ILazy, LazyModel } from '../models/lazy.model'

const loadMessage = (state: ILazy, action: IAction): ILazy => ({
  ...state,
  message: action.payload.message
})

const actionHandler: Map<string, any> = new Map<string, any>([
  [ActionTypes.LOAD_MESSAGE, loadMessage]
])

export function LazyReducer (state: ILazy = LazyModel, action: IAction) {
  const handler = actionHandler.get(action.type)
  return handler ? handler(state, action) : state
}
