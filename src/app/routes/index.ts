import { Routes } from '@angular/router';
import { MainContainer } from '../containers/main/main.component';
import { ENV } from '../../base/shared/Env';

/*
export function leches(){
  return new Promise(function (resolve) {
    (require as any).ensure([], function (require: any) {
      resolve(require('../containers/+lazy/index.ngFactory.ts')['LazyContainerModuleNgFactory']);
    });
  })
}*/

export const routes: Routes = [
  { path: '', component: MainContainer, pathMatch: 'full'},
  { path: 'main', loadChildren: '../containers/main/index#MainModule' },
  { path: 'lazy', loadChildren: '../containers/+lazy/index#LazyModule' }
  //{ path: 'container2', loadChildren: leches}
];
