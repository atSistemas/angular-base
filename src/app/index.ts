import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';

import {platformBrowser} from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Application } from './application';

platformBrowserDynamic().bootstrapModule(Application);
