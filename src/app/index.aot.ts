import 'reflect-metadata';

import {platformBrowser} from '@angular/platform-browser';
import { ApplicationNgFactory } from './app.module.ngfactory';

platformBrowser()
  .bootstrapModuleFactory(ApplicationNgFactory)
  .catch(err => console.error(err));
