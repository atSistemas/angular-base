/**
 * @fileoverview Webpack configuration file for testing
 */
import * as path from 'path';
import * as base from '../.base';
import { getPolyfills, getManifest, root } from './dll';

const { ContextReplacementPlugin, DefinePlugin } = require('webpack');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');
const resolveNgRoute = require('@angularclass/resolve-angular-routes');


module.exports = {
    devTool: 'inline-source-map',
    module: {
        loaders: [
            {
                exclude: /node_modules/,
                loader: 'awesome-typescript-loader',
                test: /\.ts?$/
            }
        ]
    },
    plugins: [
        new base.webpack.ProgressBarPlugin(),
        new TsConfigPathsPlugin(),
        new DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
        new ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            root('./src'),
            resolveNgRoute(root('./src'))
        ),
    ],
    resolve: {
        extensions: ['', '.js', '.ts', '.tsx', '.css'],
        alias: {
            'base': path.resolve(__dirname, '../src/base')
        }
    }
}