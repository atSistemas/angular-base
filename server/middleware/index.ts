import environment, { constants as envConstants } from '../environment';
import devMiddleware from './dev-middleware';
import prodMiddleware from './prod-middleware';
import { RequestHandler } from 'express';

const middlewares:Array<Function> = (environment.ENV === envConstants.DEVELOPMENT) ? devMiddleware : prodMiddleware;

export default middlewares;