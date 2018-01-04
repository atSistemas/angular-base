import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../actionTypes';

@Injectable()
export class LazyActions {

  loadMessage(message: string): Action {
    return {
      type: ActionTypes.LOAD_MESSAGE,
      payload: { message }
    };
  }
}