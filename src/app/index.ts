import 'core-js/es7/reflect';
import 'core-js/client/shim';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Application } from './app.module.ts';

platformBrowserDynamic().bootstrapModule(Application);
