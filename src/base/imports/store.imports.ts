import { reducers, metaReducers } from 'base/reducers';
import { StoreModule } from '@ngrx/store';
import { initialState } from 'base/state';

export const StoreModuleImport = StoreModule.forRoot(reducers, {
  initialState,
  metaReducers
});