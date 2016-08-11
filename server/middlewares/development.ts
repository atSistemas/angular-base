import { middleware } from './index';
import * as postcssMiddleware from 'postcss-middleware';
import moduleResolution from './module-resolution-middleware';
import vendor from './vendor-middleware';

const middlewares:middleware[] = [
    {
        name: 'vendor proxy',
        route: 'vendor',
        middleware: vendor
    },
    {
        name: 'source proxy',
        route: '/app',
        middleware: moduleResolution
    },
    {
        name: 'postcss',
        route: '(.*)\.css$',
        middleware: postcssMiddleware({
            plugins: [],
            options: {
                parser: require('sugarss'),
                map: true
            }
        })
    }

]

export default middlewares;