import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyActions } from './actions';
import { LazyComponent } from './lazy.component';
import { routes } from './lazy.routes';

@NgModule({
  declarations: [
    LazyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [LazyActions]
})

export class LazyModule { }