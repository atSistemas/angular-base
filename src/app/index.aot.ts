import 'reflect-metadata';

import {platformBrowser} from '@angular/platform-browser';
import { AppModuleNgFactory } from './app.module.ngfactory';

platformBrowser()
  .bootstrapModuleFactory(AppModuleNgFactory)
  .catch(err => console.error(err));
