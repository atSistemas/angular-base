import { Routes } from '@angular/router';
import { MainContainer, MainContainer2 } from '../containers';
import { asyncRouteProxyFactory } from '../../base';

export const AppRoutingProviders: any[] = [

];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainContainer
  },
  asyncRouteProxyFactory({
    path: '/main2',
    provide: m => m.mainContainer2
  })
];