import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LazyContainer } from './lazy';

import { AppState } from '../../../base/store';
import { combineReducers } from 'redux';
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
export default class LazyContainerModule {
  public Reducers: any;
  constructor(private actions: LazyActions) { 
    this.init();
  }
  init(): void {
    this.Reducers = combineReducers<AppState>({
      lazy: LazyReducer
    });
    console.log(this.Reducers);
    this.actions.lazyRequest();
  }
}
