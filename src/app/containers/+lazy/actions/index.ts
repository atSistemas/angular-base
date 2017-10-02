import { Injectable } from '@angular/core';
import { Action } from 'base';
import { ActionTypes } from '../action-types';
//import { MainService } from '../services/main-service';

@Injectable()
export class LazyActions {

  constructor() {
    //
  }

  public lazyRequest(): Action {
    return {
      type: ActionTypes.LAZY_REQUEST //,
      //request: this.mainService.getData()
      // payload: {
       
      // }
    };
    //console.log('lazy request');
    // this.ngRedux.dispatch({ type: actionTypes.LAZY_REQUEST });
  }
}