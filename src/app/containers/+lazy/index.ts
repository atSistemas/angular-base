import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyContainer } from './lazy';

//import { AppState, Store } from '../../../base/store';
//import { BaseReduxify } from '../../../base/store';

import { AppState, Store, BaseReduxify } from 'base';
import { Observable } from 'rxjs/Observable';
import { Action } from 'redux';
import { NgRedux } from 'ng2-redux';
import { LazyReducer } from './reducers';
import { LazyService } from './services/lazy-service';
import { LazyActions } from './actions';

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
@BaseReduxify({
  reducers: {
    lazy: LazyReducer
  },
  epics: {
    lazyService: ['getData']
  }
})
export class LazyContainerModule {
  public epics: Observable<Action>[] = [];
  constructor(
    private store: Store,
    private actions: LazyActions,
    private lazyService: LazyService
  ) { }
}
