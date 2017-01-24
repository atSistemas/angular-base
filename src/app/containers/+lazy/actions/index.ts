import { Injectable } from '@angular/core';
import { Action } from 'redux';
import { PayloadAction } from '../../../../base/';
import { AppState } from '../../../../base/store';

import { actionTypes } from '../action-types';

@Injectable()
export class LazyActions {

  constructor() {
    //
  }

  public lazyRequest() {
    console.log('lazy request');
    // this.ngRedux.dispatch({ type: actionTypes.LAZY_REQUEST });
  }
}
