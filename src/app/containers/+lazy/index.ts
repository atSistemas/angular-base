import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LazyContainer } from './lazy.component';
import { LazyActions } from './actions';

export const routes: Routes = [
  {
    path: '',
    component: LazyContainer
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    LazyContainer
  ],
  providers: [LazyActions]
})

export class LazyModule {}
