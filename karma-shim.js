/**
 * @fileoverview    Sets up testing environment for Angular 2 with webppack.
 * @author      <Rafa Bernad> rbernad@atsistemas.com
 */

Error.stackTraceLimit = Infinity;

import 'core-js/client/shim';
import 'reflect-metadata';

import 'ts-helpers';

import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

/*
 Ok, this is kinda crazy. We can use the the context method on
 require that webpack created in order to tell webpack
 what files we actually want to require or import.
 Below, context will be a function/object with file names as keys.
 using that regex we are saying look in client/app and find
 any file that ends with '.spec.ts' and get its path. By passing in true
 we say do this recursively
 */
var appContext = require.context('./src', true, /\.spec\.ts/);

// get all the files, for each file, call the context function
// that will require the file and load it up here. Context will
// loop and require those spec files here
appContext.keys().forEach(appContext);

// Select BrowserDomAdapter.
// see https://github.com/AngularClass/angular2-webpack-starter/issues/124
// Somewhere in the test setup
var testing = require('@angular/core/testing');
var browser = require('@angular/platform-browser-dynamic/testing');

testing.TestBed.initTestEnvironment(browser.BrowserDynamicTestingModule, browser.platformBrowserDynamicTesting());
