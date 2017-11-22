import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
//import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';

import { routes } from '../../app/app.routes';
import { RootReducer } from '../reducers';
import { RequestEffect } from '../effects/request.effect';

export const BaseImports = [
  EffectsModule.forRoot([RequestEffect]),
  RouterModule.forRoot(routes, { preloadingStrategy: false }),
  //RouterStoreModule.connectRouter(),
  StoreModule.forRoot(RootReducer),
];