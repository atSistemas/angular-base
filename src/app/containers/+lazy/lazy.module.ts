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
  exports: [
    LazyComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [LazyActions]
})

export class LazyModule { }

// export function WrapperLazyModule() {
//   return LazyModule;
// }