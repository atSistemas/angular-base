///<reference path="../node_modules/@types/node/index.d.ts"/>
import * as base from '../.base';
import environment from '../server/environment';
import { getPolyfills, getManifest, root } from './dll';
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { ForkCheckerPlugin, TsConfigPathsPlugin} = require('awesome-typescript-loader');
const { ContextReplacementPlugin, HotModuleReplacementPlugin, DefinePlugin, DllReferencePlugin, } = require('webpack');
const AssetsPlugin = require('assets-webpack-plugin');

export const devtool = 'source-map';

export const context = __dirname;

export const entry = {
    application: getPolyfills().concat(
        './src/app'
    )
};

export const plugins = [
    new base.webpack.ProgressBarPlugin(),
    new AssetsPlugin({
        path: root('dist'),
        filename: 'webpack-assets.json',
        prettyPrint: true
    }),
    new DllReferencePlugin({
        context: context,
        manifest: getManifest('vendor'),
    }),
    new DllReferencePlugin({
        context: context,
        manifest: getManifest('polyfills'),
    }),
    new TsConfigPathsPlugin(/* { tsconfig, compiler } */),
    //  TODO: Enable ForkCheckerPlugin as soon as the plugin is fixed
    //new ForkCheckerPlugin(),
    new base.webpack.CompileErrorsPlugin()
    
];

export const preLoaders = [
    {
        test: /\.ts$/,
        loader: 'string-replace-loader',
        query: {
            search: '(System|SystemJS)(.*[\\n\\r]\\s*\\.|\\.)import\\((.+)\\)',
            replace: '$1.import($3).then(mod => mod.__esModule ? mod.default : mod)',
            flags: 'g'
        },
        include: [root('src')]
    },
];
export const loaders = [
    {
        test: /\.ts$/,
        loaders: [
            'awesome-typescript-loader',
            'angular2-template-loader'
        ],
        exclude: [/\.(spec|e2e|d)\.ts$/],
        include: [root('./src')]
    },
    { test: /\.json$/, loader: 'json-loader', include: [root('./src')] },
    { test: /\.html/, loader: 'raw-loader', include: [root('./src')] },
    { test: /\.css$/, loader: 'raw-loader', include: [root('./src')] }
    //{ test: /\.css$/, loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]-[hash:base64:4]!postcss-loader'}
];

export const postCss = function (webpack) {
    return [
        /*require("postcss-import")({ addDependencyTo: webpack }),
        require('postcss-modules-extract-imports')(),
        require("postcss-url")(),
        require("postcss-cssnext")(),
        require("postcss-reporter")()*/
    ];
}
