import { Injectable } from '@angular/core'
import { IAction } from 'base'
import { ActionTypes } from '../actionTypes'

@Injectable()
export class LazyActions {

  public loadMessage (message: string): IAction {
    return {
      payload: { message },
      type: ActionTypes.LOAD_MESSAGE
    }
  }
}
