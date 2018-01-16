import { RouterStateSerializer } from '@ngrx/router-store';
import { RouterActions } from 'base/actions';
import { RouterStateSnapshot } from '@angular/router';

export class CustomRouterSerializer implements RouterStateSerializer<any> {
  serialize(routerState: RouterStateSnapshot): any {
    return routerState.url;
  }
}

export const StoreProviders = [
  RouterActions,
  { provide: RouterStateSerializer, useClass: CustomRouterSerializer }
];