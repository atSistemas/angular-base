import { Component } from '@angular/core';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { Observable } from 'rxjs/Observable';
import { LazyActions } from './actions';

@Component({
  selector: 'lazy-container',
  templateUrl: './lazy.html',
})
export class LazyContainer {

  @select() public lazy$: Observable<any[]>;
  public people: Object[];

  private devTools: DevToolsExtension;
  private ngReduxRouter: NgReduxRouter;

  constructor() {
    // this.actions.lazyRequest();
  }
}
