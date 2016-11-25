/*
import { NgModule, ModuleWithProviders } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { Routing, getRoutingProviders } from './routes';
import { Store } from './store';
import { enableProdMode } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DevToolsExtension, NgReduxModule, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';
import { BaseApp } from './components/base';

@NgModule({
  imports: [CommonModule, RouterModule, NgReduxModule, BrowserModule, HttpModule, Routing],
  declarations: [BaseApp],
  providers: [Store, NgRedux, NgReduxRouter, DevToolsExtension],
  exports:[Routing, BaseApp]
})
export class BaseModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: BaseModule,
      providers: [
        { provide: RouterModule, useValue: Routing },
      ]
    };
  }
}*/
