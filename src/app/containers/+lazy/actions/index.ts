import { Action } from 'redux';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'base';
import { actionTypes } from '../action-types';

//FIXME THIS SHOULD BE UNDER BASE
import { IPayloadAction } from '../../main/actions'

@Injectable()
export class LazyActions {

  constructor(private ngRedux: NgRedux<AppState>) {}

  lazyRequest(){
    this.ngRedux.dispatch({ type: actionTypes.LAZY_REQUEST });
  }
}
