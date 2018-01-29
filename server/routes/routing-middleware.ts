import * as express from 'express';

import { routes } from './';
import * as base from '../../src/base';
import renderPage from '../templates/';

export function applyServerRouting(app) {

  const page = renderPage();
  app.use((req, res, next) => {
    res.status(200).send(page);
    return;
  });

  base.console.success(`Routing up`);
}