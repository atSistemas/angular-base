import { Routes } from '@angular/router';
import { MainContainer, MainContainer2 } from '../containers';

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
    component: MainContainer2
  }
];