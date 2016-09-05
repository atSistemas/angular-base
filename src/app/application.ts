import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BaseApp } from '../base';
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule  } from '@angular/http';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { Routing, RoutingProviders } from '../base';
import { Store } from '../base/store';
import { MainContainer, MainDisplay } from './containers'

@NgModule({
    imports:      [ BrowserModule, HttpModule, Routing ],
    declarations: [ BaseApp, MainContainer, MainDisplay ],
    providers:    [ RoutingProviders, Store, NgRedux, NgReduxRouter, DevToolsExtension],
    bootstrap:    [ BaseApp ]
})
export class Application { }
