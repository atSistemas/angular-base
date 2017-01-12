import { routes } from './';
import * as base from '../../.base';
import { renderPage } from '../lib/renderPage';

export function applyServerRouting(app): void {
  app.get(`/`, renderPage);
  routes.forEach(route => {
    base.console.info(`Setting up ${route} route...`);
    app.get(`/${route}`, renderPage);
    app.get(`/${route}/*`, renderPage);
  });

  base.console.success(`Routing up`);
}
