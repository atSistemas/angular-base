import { Routes, RouterModule } from '@angular/router';
import { routes, AppRoutingProviders } from '../../app/routes';

export const RoutingProviders: any[] = [

].concat(AppRoutingProviders);

export const Routing = RouterModule.forRoot(routes);