import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { DevToolsExtension, NgRedux, select } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { AppState } from '../../../base/store';
import { combineReducers } from 'redux';
import { LazyReducer } from './reducers';
import { LazyService } from './services/lazy-service';
import { LazyActions } from './actions';

@Component({
  selector: 'lazy-container',
  templateUrl: './lazy.html',
  providers: [LazyActions, LazyService],
})

export class LazyContainer {
  private devTools: DevToolsExtension;
  private ngReduxRouter: NgReduxRouter;

  public people: Object[];
  public Reducers: any;
  constructor(
    private actions: LazyActions
  ) { }

  ngOnInit(): void {
    console.log("init lazy")
    this.Reducers = combineReducers<AppState>({
      lazy: LazyReducer
    });
    console.log(this.Reducers);
    this.actions.lazyRequest();
  }
}
