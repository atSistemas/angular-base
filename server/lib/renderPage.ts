import * as path from 'path';
import * as express from 'express';
//import 'angular2-universal-polyfills';

const baseUrl = path.resolve(__dirname, '../../src/app');

export function renderPage(req: express.Request, res: express.Response, next: any) {

  res.render('index', {
    req,
    res,
    preboot: true,
    baseUrl: '/',
    requestUrl: req.originalUrl,
    originUrl: req.hostname
  });
}
