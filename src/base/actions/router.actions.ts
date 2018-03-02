import { Injectable } from '@angular/core'
import { NavigationExtras } from '@angular/router'

import { IAction } from '../models/action'

export declare interface IRouterActionPayload {
  path: any[]
  query?: object
  extras?: NavigationExtras
}

export const RouterActionsTypes = {
  BACK: '[Router] Back',
  FORWARD: '[Router] Forward',
  GO: '[Router] Go'
}

@Injectable()
export class RouterActions {

  public go (payload: IRouterActionPayload): IAction {
    return {
      payload,
      type: RouterActionsTypes.GO
    }
  }

  public back (): IAction {
    return { type: RouterActionsTypes.BACK }
  }

  public forward (): IAction {
    return { type: RouterActionsTypes.FORWARD }
  }
}
