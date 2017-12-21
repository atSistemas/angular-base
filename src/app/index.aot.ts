import 'base/imports/rx';

import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

enableProdMode();

console.log('AOT MODE');

platformBrowser()
  .bootstrapModuleFactory(
    require('../../compiled/src/app/app.module.ngfactory').AppModuleNgFactory
  )
  .catch((err) => console.error(err));
