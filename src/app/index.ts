import 'reflect-metadata';
import 'ts-helpers';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Application } from './app.module.ts';

platformBrowserDynamic().bootstrapModule(Application);
