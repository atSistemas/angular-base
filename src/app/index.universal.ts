import { enableProdMode } from '@angular/core';
import { platformUniversalDynamic } from 'angular2-universal';
import { AppModule } from './universal.module';

//import * as base from 'base';

//enableProdMode();

console.log('UNIVERSAL');

export function bootstrap() {
  return platformUniversalDynamic()
          .bootstrapModule(AppModule)
          .catch(err => console.log(err));
}

export function bootstrapDomReady() {
  document.addEventListener('DOMContentLoaded', bootstrap);
}

bootstrapDomReady();
