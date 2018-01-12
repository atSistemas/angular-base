import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { RouterModule, RouterStateSnapshot } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ModuleWithProviders } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ENV } from 'base';

import { initialState } from '../state';
import { reducers, metaReducers } from '../reducers';
import { RequestEffect } from '../effects/request.effect';

import { RouterActions } from '../actions/routing';

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

export const BaseImports = [
  StoreModuleImport,
  EffectsModuleImport,
  StoreRouterConnectingModule,
  (ENV !== 'production') ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : []
];

export const StoreProviders = [
  RouterActions,
  { provide: RouterStateSerializer, useClass: CustomRouterSerializer }
];
