import { Routes } from '@angular/router';
import { MainContainer } from '../containers';

export function getAppRoutingProviders():any[]{
  return [];
}
/*
export const AppRoutingProviders: any[] = [

];*/

export const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainContainer},
  { path: 'container2', pathMatch: 'full', loadChildren: '../containers/+lazy#LazyContainerModule' },/*
  {
  path: 'container2',
  loadChildren: () => new Promise(function (resolve) {
    (require as any).ensure([], function (require: any) {
      resolve(require('./containers/+lazy/lazy..ngfactory')['LazyModuleNgFactory']);
    });
  })*/
];
