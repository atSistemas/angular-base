import environment, { constants as envConstants } from '../environment';
import devMiddleware from './dev-middleware';
import prodMiddleware from './prod-middleware';
import { RequestHandler } from 'express';

const compression = require('compression');

const commonMiddlewares: RequestHandler[] = [
    compression()
];

const middlewares: RequestHandler[] = commonMiddlewares.concat((environment.ENV === envConstants.DEVELOPMENT) ? devMiddleware : prodMiddleware);

export default middlewares;