import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Action } from 'redux';
import { PayloadAction } from '../../../../base/';
import { AppState } from '../../../../base/store';

import { actionTypes } from '../action-types';

@Injectable()
export class LazyActions {

  constructor(private ngRedux: NgRedux<AppState>) {}

  public lazyRequest() {
    this.ngRedux.dispatch({ type: actionTypes.LAZY_REQUEST });
  }
}
