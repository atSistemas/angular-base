import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';

import {platformBrowser} from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BaseApp } from '../base/components/base/';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { Routing, AppRoutingProviders } from '../base/routes/';
import { Store } from '../base/store';

@NgModule({
    imports:      [ BrowserModule, Routing ],
    declarations: [ BaseApp, Store, NgRedux, NgReduxRouter, HTTP_PROVIDERS, DevToolsExtension],
    providers:    [ AppRoutingProviders ],
    bootstrap:    [ BaseApp ]
})
class BaseModule { }

platformBrowserDynamic().bootstrapModule(BaseModule);
