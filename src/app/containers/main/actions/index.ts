import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { Action } from 'redux';

import { AppState } from '../../../../base/store';
import { actionTypes } from '../action-types';

@Injectable()
export class MainActions {

  constructor(private ngRedux: NgRedux<AppState>) {}

  public load() {
    this.ngRedux.dispatch({ type: actionTypes.MAIN_CONTAINER });
  }

  public lazy() {
    this.ngRedux.dispatch({ type: actionTypes.LAZY_CONTAINER });
  }

  public click() {
    this.ngRedux.dispatch({ type: actionTypes.CLICK });
  }

  public mainRequest() {
    this.ngRedux.dispatch({ type: actionTypes.MAIN_REQUEST });
  }
}
