import { Injectable } from '@angular/core';
import { NavigationExtras } from '@angular/router';

import { Action } from '../models/action';

export declare interface RouterActionPayload {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export const RouterActionsTypes = {
  GO: '[Router] Go',
  BACK: '[Router] Back',
  FORWARD: '[Router] Forward'
};

@Injectable()
export class RouterActions {

  go(payload: RouterActionPayload): Action {
    return {
      type: RouterActionsTypes.GO,
      payload
    };
  }

  back(payload: RouterActionPayload): Action {
    return { type: RouterActionsTypes.BACK };
  }

  forward(payload: RouterActionPayload): Action {
    return { type: RouterActionsTypes.FORWARD };
  }
}
