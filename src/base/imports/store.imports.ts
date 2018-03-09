import { StoreModule } from '@ngrx/store'
import { metaReducers, reducers } from 'base/reducers'
import { initialState } from 'base/state'

export const StoreModuleImport = StoreModule.forRoot(reducers, {
  initialState,
  metaReducers
})
