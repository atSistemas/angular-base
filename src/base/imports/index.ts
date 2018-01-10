import { ModuleWithProviders } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer, routerReducer } from '@ngrx/router-store';

import { reducers, metaReducers } from '../reducers';
import { initialState } from '../state';
import { RequestEffect } from '../effects/request.effect';
import { ENV } from 'base';

import { RouterActions } from '../actions/routing';

const storeDevtools = (): ModuleWithProviders => (
  require('@ngrx/store-devtools').StoreDevtoolsModule.instrument({
    maxAge: 10
  })
);

export class CustomRouterSerializer implements RouterStateSerializer<any> {
  serialize(routerState: RouterStateSnapshot): any {
    return routerState.url;
  }
}

export const StoreModuleImport =
  StoreModule.forRoot(reducers, {
    initialState,
    metaReducers
  });

export const EffectsModuleImport = EffectsModule.forRoot([ RequestEffect ]);

export const baseImports = [
  StoreModuleImport,
  EffectsModuleImport,
  StoreRouterConnectingModule
];

if (ENV === 'development') {
  baseImports.push(...[
    storeDevtools()
  ]);
}

export const BaseImports = baseImports;

export const StoreProviders = [
  RouterActions,
  { provide: RouterStateSerializer, useClass: CustomRouterSerializer }
];
