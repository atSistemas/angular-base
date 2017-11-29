import { StoreModule } from '@ngrx/store';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer, routerReducer } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { routes } from '../../app/app.routes';
import { reducers, metaReducers } from '../reducers';
import { initialState } from '../state';
import { RequestEffect } from '../effects/request.effect';
import { ENV } from 'base';

import { RouterActions } from '../actions/routing';

export class CustomRouterSerializer implements RouterStateSerializer<any> {
  serialize(routerState: RouterStateSnapshot): any {
    return routerState.url;
  }
}

export const baseImports = [
  RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: false
  }),
  StoreModule.forRoot(reducers, {
    initialState,
  }),  EffectsModule.forRoot([]),
  StoreRouterConnectingModule
];
/*
if (ENV === 'development') {
  baseImports.push(...[
    StoreDevtoolsModule.instrument({
      maxAge: 10
    })
  ]);
}*/

export const BaseImports = baseImports;

export const StoreProviders = [
  RouterActions,
  { provide: RouterStateSerializer, useClass: CustomRouterSerializer }
];