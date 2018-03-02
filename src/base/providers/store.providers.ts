import { RouterStateSnapshot } from '@angular/router'
import { RouterStateSerializer } from '@ngrx/router-store'
import { RouterActions } from 'base/actions'

export class CustomRouterSerializer implements RouterStateSerializer<any> {
  public serialize (routerState: RouterStateSnapshot): any {
    return routerState.url
  }
}

export const StoreProviders = [
  RouterActions,
  { provide: RouterStateSerializer, useClass: CustomRouterSerializer }
]
