import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BaseApp } from '../base';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { Routing, RoutingProviders } from '../base';
import { Store } from '../base/store';
import { MainContainer, MainContainer2, MainDisplay } from './containers'

@NgModule({
    imports:      [ BrowserModule, Routing ],
    declarations: [ BaseApp, MainContainer, MainContainer2, MainDisplay ],
    providers:    [ RoutingProviders, Store, NgRedux, NgReduxRouter, HTTP_PROVIDERS, DevToolsExtension],
    bootstrap:    [ BaseApp ]
})
export class BaseModule { }
