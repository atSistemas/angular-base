import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../action-types';

@Injectable()
export class LazyActions {

  public lazyRequest(): Action {
    return {
      type: ActionTypes.get('LAZY_REQUEST')
    };
  }
}