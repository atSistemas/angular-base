import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../action-types';

@Injectable()
export class LazyActions {

  constructor() {}

  public lazyRequest(): Action {
    return {
      type: ActionTypes.LAZY_REQUEST 
    };
  }
}