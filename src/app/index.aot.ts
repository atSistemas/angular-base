import '../base/polyfills';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .catch(err => console.error(err));
