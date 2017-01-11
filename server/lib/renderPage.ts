import * as path from 'path';
import * as express from 'express';
import 'angular2-universal-polyfills';

import { AppModule } from '../../src/app/universal.module';

const baseUrl = path.resolve(__dirname, '../../src/app');

console.log(111111, __dirname, baseUrl);
export function renderPage(req: express.Request, res: express.Response, next: any) {

  res.render('index', {
    req,
    res,
    ngModule: AppModule,
    preboot: true,
    baseUrl: '../../src/app',
    requestUrl: req.originalUrl,
    originUrl: req.hostname
  });
}
