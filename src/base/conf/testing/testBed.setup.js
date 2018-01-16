const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');
Error.stackTraceLimit = 100;

testing.TestBed.initTestEnvironment(
  browser.BrowserDynamicTestingModule,
  browser.platformBrowserDynamicTesting()
);