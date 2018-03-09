import { enableProdMode } from '@angular/core'
import { platformBrowser } from '@angular/platform-browser'
import 'base/conf/rx'

function loadAppModuleNgFactory () {
  return require('../../dist/compiled/src/app/app.module.ngfactory').AppModuleNgFactory
}

enableProdMode()

// tslint:disable-next-line
console.log('AOT MODE')

platformBrowser()
  .bootstrapModuleFactory(loadAppModuleNgFactory())
  // tslint:disable-next-line
  .catch((err) => console.error(err))
