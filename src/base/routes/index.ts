import { Routes, RouterModule } from '@angular/router';
// WE NEED TO SPECIFY THE FILE TO ALLOW ANGULAR RESOLVING THE ROUTES DINAMICALLY
import { routes, AppRoutingProviders } from '../../app/routes/index';

console.log(routes)
export const RoutingProviders: any[] = [

].concat(AppRoutingProviders);

export const Routing = RouterModule.forRoot(routes);