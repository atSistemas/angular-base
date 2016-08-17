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
    declarations: [ BaseApp],
    providers:    [ AppRoutingProviders, Store, NgRedux, NgReduxRouter, HTTP_PROVIDERS, DevToolsExtension],
    bootstrap:    [ BaseApp ]
})
export class BaseModule { }
