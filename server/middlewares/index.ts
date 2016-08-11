import environment from '../environment';
import devMiddleware from './development';
import prodMiddleware from './production';
import { RequestHandler } from 'express';

export interface middleware {
  name: string,
  route: string,
  middleware: RequestHandler
};

const middlewares = (environment.ENV === 'development') ? devMiddleware : prodMiddleware;

export default middlewares
