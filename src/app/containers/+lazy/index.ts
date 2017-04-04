import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LazyActions } from './actions';
import { LazyContainer } from './lazy.component';

export const routes: Routes = [
  {
    component: LazyContainer,
    path: '',
  },
];

@NgModule({
  declarations: [
    LazyContainer,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  providers: [LazyActions],
})

export class LazyModule {}