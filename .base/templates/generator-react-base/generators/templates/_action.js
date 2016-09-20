import { Action } from 'redux';
import { Injectable } from '@angular/core';
import { NgRedux } from 'ng2-redux';
import { AppState } from 'base';
import { actionTypes } from '../action-types';

@Injectable()
export class <%= _.capitalize(name) %>Actions {

  constructor(private ngRedux: NgRedux<AppState>) {}

  query() {
    this.ngRedux.dispatch({ type: actionTypes.<%= name.toUpperCase() %>_QUERY });
  }

}
