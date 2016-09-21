import { Action } from 'redux';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState, PayloadAction } from 'base';
import { actionTypes } from '../action-types';

@Injectable()
export class LazyActions {

  constructor(private ngRedux: NgRedux<AppState>) {}

  lazyRequest(){
    this.ngRedux.dispatch({ type: actionTypes.LAZY_REQUEST });
  }
}
