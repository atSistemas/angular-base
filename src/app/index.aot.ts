import 'base/imports/rx';
import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

function loadAppModuleNgFactory() {
  return require('../../compiled/src/app/app.module.ngfactory').AppModuleNgFactory;
}

enableProdMode();

console.log('AOT MODE');

platformBrowser()
  .bootstrapModuleFactory(loadAppModuleNgFactory())
  .catch((err) => console.error(err));
