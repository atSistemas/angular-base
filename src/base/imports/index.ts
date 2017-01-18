import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';

import { routes } from '../../app/routes';
import { rootReducer } from '../reducers';

export const BaseImports = [
  RouterModule.forRoot(routes, { preloadingStrategy: false}),
  RouterStoreModule.connectRouter(),
  StoreModule.provideStore(rootReducer),
];
