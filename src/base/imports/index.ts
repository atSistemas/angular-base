import { StoreRouterConnectingModule } from '@ngrx/router-store'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

import { ENV } from '../shared/Env'
import { EffectsModuleImport } from './effects.imports'
import { StoreModuleImport } from './store.imports'

export { StoreModuleImport } from './store.imports'
export { EffectsModuleImport } from './effects.imports'

export const BaseImports = [
  StoreModuleImport,
  EffectsModuleImport,
  StoreRouterConnectingModule,
  (ENV !== 'production') ? StoreDevtoolsModule.instrument({ maxAge: 10 }) : []
]
