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
import { Reducers, Reduxify } from '../../../base';
import { Store } from '../../../base/store';

@Reduxify({
  reducers: {
    lazy: LazyReducer
  },
  epics: {
    lazyService: ['getData']
  }
})
@NgModule({
  declarations: [LazyContainer],
  providers: [Reducers, LazyActions, LazyService],
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
  constructor(
    private ngRedux: NgRedux<AppState>,
    private store: Store,
    private reducersStore: Reducers,
    private actions: LazyActions,
    lazyService: LazyService
  ) { }
}
