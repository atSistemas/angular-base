import 'reflect-metadata';
import 'ts-helpers';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Application } from './application';

platformBrowserDynamic().bootstrapModule(Application);
