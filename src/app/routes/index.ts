import { Routes } from '@angular/router';
import { MainContainer } from '../containers';
import { ENV } from '../../base/shared/Env';

export function getAppRoutingProviders():any[]{
  return [];
}
/*
export function leches(){
  return new Promise(function (resolve) {
    (require as any).ensure([], function (require: any) {
      resolve(require('../containers/+lazy/index.ngFactory.ts')['LazyContainerModuleNgFactory']);
    });
  })
}*/

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainContainer},
  { path: 'container2', pathMatch: 'full', loadChildren: '../containers/+lazy/#LazyContainerModule' }
  //{ path: 'container2', loadChildren: leches}
];
