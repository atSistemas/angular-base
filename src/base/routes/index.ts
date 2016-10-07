import { Routes, RouterModule } from '@angular/router';
import { routes, getAppRoutingProviders } from '../../app/routes';
/*
export const RoutingProviders: any[] = [

].concat(getAppRoutingProviders());
*/

export function RoutingProviders():any[]{
  return getAppRoutingProviders();
}

export const Routing = RouterModule.forRoot(routes);
