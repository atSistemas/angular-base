import { RouterConfig } from '@angular/router';

import { MainContainer } from '../../app/containers/main';
import { MainContainer2 } from '../../app/containers/main2';

export const Routes: RouterConfig = [{
  path: '',
  pathMatch: 'full',
  component: MainContainer
},{
  path: 'container2',
  pathMatch: 'full',
  component: MainContainer2
}];
