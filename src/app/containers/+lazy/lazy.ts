import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { LazyActions } from './actions';

@Component({
  selector: 'lazy-container',
  templateUrl: './lazy.html'
})
export class LazyContainer {
  private devTools: DevToolsExtension;
  private ngReduxRouter: NgReduxRouter;

  public people: Object[];
  @select() lazy$:Observable<any[]>
  constructor(private actions:LazyActions ) { 
    this.actions.lazyRequest();
  }
}
