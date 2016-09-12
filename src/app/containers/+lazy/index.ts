import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyContainer } from './lazy';

import { AppState } from '../../../base/store';
import { Observable } from 'rxjs/Observable';
import { Action } from 'redux';
import { NgRedux } from 'ng2-redux';
import { LazyReducer } from './reducers';
import { LazyService } from './services/lazy-service';
import { LazyActions } from './actions';
import { Reduxify } from '../../../base/decorators';
import { Store } from '../../../base/store';

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
@Reduxify({
  reducers: {
    lazy: LazyReducer
  },
  epics: {
    lazyService: ['getData']
  }
})
export default class LazyContainerModule {
  public epics: Observable<Action>[] = [];
  constructor(
    private store: Store,
    private actions: LazyActions,
    private lazyService: LazyService
  ) { }
}
