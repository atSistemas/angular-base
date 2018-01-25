import { EffectsModule } from '@ngrx/effects';

import { RequestEffect } from '../effects/request.effect';

export const EffectsModuleImport = EffectsModule.forRoot([
  RequestEffect
]);