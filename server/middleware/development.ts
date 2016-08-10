import * as postcssMiddleware from 'postcss-middleware';

const middleware = [
    postcssMiddleware({
        plugins: [],
        options: {
            parser: require('sugarss'),
            map: true
        }
    })
]

export default middleware;