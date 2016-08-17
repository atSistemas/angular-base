import { middleware } from '../index';
import * as postcssMiddleware from 'postcss-middleware';
import moduleResolution from '../module-resolution-middleware';
import vendor from '../vendor-middleware';

const middlewares:middleware[] = [
    {
        name: 'vendor',
        route: '/vendor.js',
        middleware: vendor
    },
    /*{
        name: 'source proxy',
        route: '/app',
        middleware: moduleResolution
    },*/
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