///<reference path="../../../node_modules/@types/systemjs/index.d.ts"/>

import {Component, ComponentFactoryResolver, ViewContainerRef, Injector, Type, ElementRef} from '@angular/core';
import { Route } from '@angular/router';

export class ComponentProvider {
  path: string;
  provide: { (module: any): any };
}

const PROXY_CLASSNAME = 'component-wrapper';
const PROXY_SELECTOR = `.${PROXY_CLASSNAME}`;

export function asyncRouteProxyFactory(provider: ComponentProvider): Route {
  @Component({
    selector: 'component-proxy',
    template: `<div class"${PROXY_CLASSNAME}>loading view...</div>`
  })
  class ComponentProxy {
    public componentRef: any
    constructor(private cmpResolver: ComponentFactoryResolver, private viewContainer: ViewContainerRef) {
      System.import(provider.path)
        .then(m => {
          const childComponent = this.cmpResolver.resolveComponentFactory(provider.provide(m));
          this.componentRef = this.viewContainer.createComponent(childComponent);
        });
    }
  }
  return {
    path: provider.path,
    component: ComponentProxy
  };
}


