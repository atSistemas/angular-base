import { RouterConfig } from '@angular/router';

import { MainContainer } from '../../app/containers/main';

export const Routes: RouterConfig = [{
  path: '',
  pathMatch: 'full',
  component: MainContainer
}];
