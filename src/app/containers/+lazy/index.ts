import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyContainer } from './lazy';

import { AppState } from '../../../base/store';
import { Observable } from 'rxjs/Observable';
import { Action, combineReducers } from 'redux';
import { NgRedux } from 'ng2-redux';
import { LazyReducer } from './reducers';
import { LazyService } from './services/lazy-service';
import { LazyActions } from './actions';
import { BaseReducers } from '../../../base';
import { Store } from '../../../base/store';
/*@BaseLazyRedux({
  lazy: LazyReducer
})*/
@NgModule({
  declarations: [LazyContainer],
  providers: [LazyActions, LazyService],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: LazyContainer }
    ])
  ]
})
export default class LazyContainerModule {
  public reducers: any;
  public epics: Observable<Action>[] = [];
  constructor(private ngRedux: NgRedux<AppState>, private store: Store, private actions: LazyActions, lazyService: LazyService) {
    this.epics.push(lazyService.getData);
    this.init();
  }
  init(): void {
    this.reducers = {
      lazy: LazyReducer
    };
    this.replaceReducers()
    this.actions.lazyRequest();
  }
  replaceReducers() {
    this.ngRedux.replaceReducer(combineReducers<AppState>(Object.assign(BaseReducers, this.reducers)));
    this.epics.forEach((epic) => this.store.epic$.next(epic));
  }
}
