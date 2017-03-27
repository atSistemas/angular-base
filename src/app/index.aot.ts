import 'base/imports/rx';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from '../compiled/src/app/app.module.ngfactory';

enableProdMode();

console.log('AOT MODE');

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .catch((err) => console.error(err));
