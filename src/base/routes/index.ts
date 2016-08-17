import { Routes, RouterModule } from '@angular/router';

import { MainContainer } from '../../app/containers/main';
import { MainContainer2 } from '../../app/containers/main2';

const appRoutes: Routes = [{
  path: '',
  pathMatch: 'full',
  component: MainContainer
},{
  path: 'container2',
  pathMatch: 'full',
  component: MainContainer2
}];

export const AppRoutingProviders: any[] = [

];

export const Routing = RouterModule.forRoot(appRoutes);
