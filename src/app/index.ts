/*
import 'reflect-metadata';
import 'babel-polyfill';
import 'core-js/es6';
import 'core-js/es7/reflect';
import 'zone.js/dist/zone';
import 'ts-helpers';

import { enableProdMode } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { provideRouter } from '@angular/router';
import { DevToolsExtension, NgRedux } from 'ng2-redux';
import { NgReduxRouter } from 'ng2-redux-router';

import { BaseApp } from '../base/';
import { Routes } from '../base/routes';

bootstrap(
  BaseApp, [
  NgRedux,
  NgReduxRouter,
  HTTP_PROVIDERS,
  DevToolsExtension,
  provideRouter(Routes),
]);*/

import { MainContainer } from './containers/main';

export { MainContainer };
