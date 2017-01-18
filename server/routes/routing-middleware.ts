import * as express from 'express';

import { routes } from './';
import * as base from '../../.base';
import renderPage from '../templates/';

export function applyServerRouting(app) {

  /*
  app.get(`/`, renderPage);
  routes.forEach(route => {
    base.console.info(`Setting up ${route} route...`);
    app.get(`/${route}`, renderPage);
    app.get(`/${route}/*`, renderPage);
  });*/

  //const page = renderPage();


  const page = renderPage();
  app.use((req, res, next) => {
    res.status(200).send(page);
    return;
  });

  base.console.success(`Routing up`);
}
