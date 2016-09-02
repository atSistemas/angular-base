import { Routes, RouterModule } from '@angular/router';
import { routes, AppRoutingProviders } from '../../app/routes';
export * from './component-proxy-factory'; 
export const RoutingProviders: any[] = [

].concat(AppRoutingProviders);

export const Routing = RouterModule.forRoot(routes);