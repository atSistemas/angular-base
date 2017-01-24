import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { RouterStoreModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { useLogMonitor } from '@ngrx/store-log-monitor';

import { routes } from '../../app/routes';
import { rootReducer } from '../reducers';
import { MainEffects } from '../../app/containers/main/services/main.effects';

export const BaseImports = [
  EffectsModule.run(MainEffects),
  RouterModule.forRoot(routes, { preloadingStrategy: false}),
  RouterStoreModule.connectRouter(),
  StoreModule.provideStore(rootReducer),
];
