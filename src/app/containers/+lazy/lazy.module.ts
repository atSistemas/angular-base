import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyActions } from './actions';
import { LazyContainer } from './lazy.container';
import { routes } from './lazy.routes';

@NgModule({
  declarations: [
    LazyContainer
  ],
  exports: [
    LazyContainer,
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [ LazyActions ]
})

export class LazyModule { }