import { Routes } from '@angular/router';
import { MainContainer } from '../containers';

export const AppRoutingProviders: any[] = [

];

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: MainContainer
  }, {
    path: 'container2',
    pathMatch: 'full',
    loadChildren: () => System.import('../containers/+lazy'),
  }
];