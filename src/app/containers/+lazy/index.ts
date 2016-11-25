/*import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyContainer } from './lazy';

//import { AppState, Store } from '../../../base/store';
//import { BaseReduxify } from '../../../base/store';

import { AppState, Store } from '../../../base';
import { Observable } from 'rxjs/Observable';
import { Action } from 'redux';
import { NgRedux } from 'ng2-redux';
import { LazyReducer } from './reducers';
import { LazyService } from './services/lazy-service';
import { LazyActions } from './actions';

console.log('LAZY MODULE');

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

export class LazyContainerModule {
  public epics: Observable<Action>[] = [];
  constructor(
    private store: Store,
    private actions: LazyActions,
    private lazyService: LazyService
  ) {

    console.log('LAZY CONSTRUCTOR');
  }
}*/


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LazyContainer } from './lazy.component';

export const lazyRoutes: Routes = [
  {
    path: '',
    component: LazyContainer
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(lazyRoutes)
  ],
  declarations: [
    LazyContainer
  ]
})

export class MainModule {}
